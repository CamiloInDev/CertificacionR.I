---
name: fastapi-backend
description: Guía de arquitectura, convenciones y patrones para construir el backend FastAPI del proyecto R.I Certificación. Cubre estructura modular, Pydantic models, dependency injection, envío SMTP, archivos estáticos y Docker.
---

# FastAPI Backend — R.I Certificación

## Scope

**Este skill cubre:**
- Estructura modular del proyecto backend
- Patrones de código: routers, models, schemas, config
- Configuración SMTP para formularios de contacto/quejas
- Servicio de archivos estáticos (imágenes, PDFs, brochures)
- Middleware CORS y manejo de errores
- Dockerización del backend

## Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # Entry point, CORS, static mounts
│   ├── config.py            # Settings via pydantic-settings
│   ├── routers/
│   │   ├── __init__.py
│   │   ├── contact.py       # POST /api/contact
│   │   ├── brochures.py     # GET /api/brochures
│   │   └── health.py        # GET /api/health
│   ├── models/
│   │   ├── __init__.py
│   │   └── forms.py         # Pydantic models for forms
│   ├── services/
│   │   ├── __init__.py
│   │   └── email.py         # Email sending service
│   └── static/              # Mounted at /static/
│       ├── images/
│       └── brochures/
├── requirements.txt
├── Dockerfile
└── .env
```

## Conventions

### 1. Router Structure
- Each router file in `routers/` uses `APIRouter(prefix="...", tags=["..."])`
- Keep handlers thin; delegate logic to `services/`
- Always return Pydantic response models

### 2. Config
- Use `pydantic-settings` BaseSettings for env vars
- `.env` file for local dev (gitignored)
- Config singleton via `lru_cache`

### 3. Models (Pydantic)
- `models/forms.py` contains request/response schemas
- Use `EmailStr` for email validation
- Use `Field(..., description="...")` for OpenAPI docs

### 4. Email Service
- SMTP config in `config.py`
- `services/email.py` has `send_email()` function
- HTML templates for email body

### 5. Static Files
- All images and PDFs served from `static/`
- Mounted at `/static/` in main.py
- Use `StaticFiles` with `check_dir=False`

### 6. Error Handling
- Use HTTPException with status codes
- Custom error response model when needed
- Log errors with Python's logging module

## Router Patterns

### Health Check
```python
@router.get("/health")
async def health():
    return {"status": "ok", "version": "1.0.0"}
```

### Contact Form
```python
@router.post("/contact", status_code=201)
async def submit_contact(
    form: ContactForm,
    email_service: EmailService = Depends(get_email_service)
):
    await email_service.send_contact_email(form)
    return {"message": "Mensaje enviado correctamente"}
```

### Static File Serving
```python
app.mount("/static/images", StaticFiles(directory="app/static/images"), name="images")
app.mount("/static/brochures", StaticFiles(directory="app/static/brochures"), name="brochures")
```

## SMTP Configuration

```python
class Settings(BaseSettings):
    smtp_host: str = "smtp.gmail.com"
    smtp_port: int = 587
    smtp_user: str = ""
    smtp_password: str = ""
    email_to: str = "comercial@ricertificacion.com"

    model_config = SettingsConfigDict(env_file=".env")
```

## Docker

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## Requirements

```
fastapi>=0.110.0
uvicorn[standard]>=0.27.0
pydantic>=2.0.0
pydantic-settings>=2.0.0
python-multipart>=0.0.9
aiofiles>=23.0.0
```

## Workflow

1. Define Settings in `config.py` first
2. Create Pydantic models in `models/forms.py`
3. Implement service functions in `services/`
4. Create routers in `routers/`
5. Wire everything in `main.py`
6. Test with `uvicorn app.main:app --reload`
