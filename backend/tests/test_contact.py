import pytest


VALID_CONTACT = {
    'nombre': 'Juan Pérez',
    'email': 'juan@example.com',
    'telefono': '3001234567',
    'mensaje': 'Quiero información sobre certificación de personas.',
}

VALID_COMPLAINT = {
    'tipo': 'queja',
    'radicacion': 'RAD-001',
    'nombre': 'María Gómez',
    'email': 'maria@example.com',
    'telefono': '3107654321',
    'descripcion': 'Descripción detallada de la queja con más de 20 caracteres.',
}


@pytest.mark.asyncio
async def test_contact_valid_returns_201(client):
    response = await client.post('/api/contact', json=VALID_CONTACT)
    assert response.status_code == 201
    assert response.json() == {'message': 'Mensaje enviado correctamente'}


@pytest.mark.asyncio
async def test_contact_missing_fields_returns_422(client):
    response = await client.post('/api/contact', json={})
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_contact_invalid_email_returns_422(client):
    payload = {**VALID_CONTACT, 'email': 'no-es-un-email'}
    response = await client.post('/api/contact', json=payload)
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_contact_short_message_returns_422(client):
    payload = {**VALID_CONTACT, 'mensaje': 'corto'}
    response = await client.post('/api/contact', json=payload)
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_complaint_valid_returns_201(client):
    response = await client.post('/api/complaint', json=VALID_COMPLAINT)
    assert response.status_code == 201
    assert response.json() == {'message': 'Queja o apelación enviada correctamente'}


@pytest.mark.asyncio
async def test_complaint_missing_fields_returns_422(client):
    response = await client.post('/api/complaint', json={})
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_complaint_invalid_tipo_returns_422(client):
    payload = {**VALID_COMPLAINT, 'tipo': 'invalido'}
    response = await client.post('/api/complaint', json=payload)
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_complaint_short_description_returns_422(client):
    payload = {**VALID_COMPLAINT, 'descripcion': 'muy corta'}
    response = await client.post('/api/complaint', json=payload)
    assert response.status_code == 422
