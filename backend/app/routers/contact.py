import logging

from fastapi import APIRouter, HTTPException, Request

from app.limiter import limiter
from app.models.forms import ContactForm, ComplaintForm, ContactResponse
from app.services.email import send_contact_email, send_complaint_email

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api", tags=["contact"])

GENERIC_ERROR = "No se pudo enviar el mensaje. Por favor intenta de nuevo más tarde."


@router.post("/contact", response_model=ContactResponse, status_code=201)
@limiter.limit("5/minute")
async def submit_contact(request: Request, form: ContactForm):
    try:
        send_contact_email(form)
        return ContactResponse()
    except Exception:
        logger.exception("Error enviando email de contacto")
        raise HTTPException(status_code=500, detail=GENERIC_ERROR)


@router.post("/complaint", response_model=ContactResponse, status_code=201)
@limiter.limit("5/minute")
async def submit_complaint(request: Request, form: ComplaintForm):
    try:
        send_complaint_email(form)
        return ContactResponse(message="Queja o apelación enviada correctamente")
    except Exception:
        logger.exception("Error enviando email de queja/apelación")
        raise HTTPException(status_code=500, detail=GENERIC_ERROR)
