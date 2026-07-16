import pytest


@pytest.mark.asyncio
async def test_ping_returns_ok(client):
    response = await client.get('/ping')
    assert response.status_code == 200
    assert response.json() == {'status': 'ok'}


@pytest.mark.asyncio
async def test_health_returns_status_and_version(client):
    response = await client.get('/api/health')
    assert response.status_code == 200
    data = response.json()
    assert data['status'] == 'ok'
    assert data['version'] == '1.0.0'
