from fastapi import APIRouter, HTTPException

from app.models.forms import ContactForm, ComplaintForm, ContactResponse
from app.services.email import send_contact_email, send_complaint_email

router = APIRouter(prefix="/api", tags=["contact"])


@router.post("/contact", response_model=ContactResponse, status_code=201)
async def submit_contact(form: ContactForm):
    try:
        send_contact_email(form)
        return ContactResponse()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/complaint", response_model=ContactResponse, status_code=201)
async def submit_complaint(form: ComplaintForm):
    try:
        send_complaint_email(form)
        return ContactResponse(message="Queja o apelación enviada correctamente")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
