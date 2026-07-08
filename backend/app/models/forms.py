from pydantic import BaseModel, EmailStr, Field
from typing import Literal


class ContactForm(BaseModel):
    nombre: str = Field(..., min_length=1, max_length=100, description="Nombre completo")
    email: EmailStr = Field(..., description="Correo electrónico")
    telefono: str = Field("", max_length=20, description="Teléfono de contacto")
    mensaje: str = Field(..., min_length=10, max_length=2000, description="Mensaje")


class ComplaintForm(BaseModel):
    tipo: Literal["queja", "apelacion"] = Field(..., description="Tipo de comunicación")
    radicacion: str = Field("", description="Código de radicación")
    nombre: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    telefono: str = Field(..., max_length=20)
    descripcion: str = Field(..., min_length=20, max_length=5000, description="Descripción detallada")


class ContactResponse(BaseModel):
    message: str = "Mensaje enviado correctamente"
