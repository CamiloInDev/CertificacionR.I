import smtplib
from email.message import EmailMessage
from app.config import settings
from app.models.forms import ContactForm, ComplaintForm


def send_contact_email(form: ContactForm) -> None:
    msg = EmailMessage()
    msg["Subject"] = f"Nuevo contacto de {form.nombre}"
    msg["From"] = settings.smtp_user
    msg["To"] = settings.email_to

    body = f"""
    Nombre: {form.nombre}
    Email: {form.email}
    Teléfono: {form.telefono}

    Mensaje:
    {form.mensaje}
    """
    msg.set_content(body.strip())

    _send(msg)


def send_complaint_email(form: ComplaintForm) -> None:
    tipo_label = "Queja" if form.tipo == "queja" else "Apelación"
    msg = EmailMessage()
    msg["Subject"] = f"Nueva {tipo_label} - {form.radicacion}"
    msg["From"] = settings.smtp_user
    msg["To"] = settings.email_to

    body = f"""
    Tipo: {tipo_label}
    Radicación: {form.radicacion}
    Nombre: {form.nombre}
    Email: {form.email}
    Teléfono: {form.telefono}

    Descripción:
    {form.descripcion}
    """
    msg.set_content(body.strip())

    _send(msg)


def _send(msg: EmailMessage) -> None:
    if not settings.smtp_user or not settings.smtp_password:
        print(f"[DEV] Email not sent (SMTP not configured): {msg['Subject']}")
        print(msg.get_content())
        return

    with smtplib.SMTP(settings.smtp_host, settings.smtp_port) as server:
        server.starttls()
        server.login(settings.smtp_user, settings.smtp_password)
        server.send_message(msg)
