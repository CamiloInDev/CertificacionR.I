# R.I Certificación — Sitio Web Corporativo

Sitio web corporativo de **R.I Certificación**, organismo acreditado ONAC para certificación de personas (ISO/IEC 17024:2012) e inspección de equipos (ISO/IEC 17020:2012).

## Stack

| Capa | Tecnología |
|------|-----------|
| Frontend | React 19 + TypeScript + Vite + Tailwind v4 |
| Backend | Python 3.12+ / FastAPI + Uvicorn |
| BD | Ninguna (archivos planos + SMTP) |

## Desarrollo local

```bash
# Backend
cd backend
python -m venv .venv
.venv\Scripts\Activate   # Windows
pip install -r requirements.txt
cp .env.example .env     # Configurar credenciales SMTP
uvicorn app.main:app --reload --port 8000

# Frontend (otra terminal)
cd frontend
npm install
npm run dev
```

Frontend en `http://localhost:5173`, backend en `http://localhost:8000`.

## Producción

Ver [GUIA_DESPLIEGUE.md](./GUIA_DESPLIEGUE.md) para las 3 opciones:
- Linux EC2 + Uvicorn (recomendada)
- Windows + IIS + ARR
- Windows + Uvicorn directo

## Documentación

- [MEMORIA.md](./MEMORIA.md) — Historial completo del proyecto (11 fases)
- [GUIA_DESPLIEGUE.md](./GUIA_DESPLIEGUE.md) — Guía de despliegue detallada
