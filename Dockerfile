FROM node:20-alpine AS build
WORKDIR /app
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ .
RUN npm run build

FROM python:3.12-slim
WORKDIR /app
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/ .
COPY --from=build /app/dist /app/static

COPY <<-"EOF" /usr/local/bin/entrypoint.sh
#!/bin/sh
exec uvicorn app.main:app \
  --host "${HOST:-0.0.0.0}" \
  --port "${PORT:-8020}" \
  --proxy-headers \
  --forwarded-allow-ips "*"
EOF
RUN chmod +x /usr/local/bin/entrypoint.sh

RUN addgroup --system --gid 1001 app && adduser --system --uid 1001 app
RUN chown -R app:app /app
USER app

EXPOSE 8020

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
