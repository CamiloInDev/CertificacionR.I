import os
from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse

router = APIRouter(prefix="/api/brochures", tags=["brochures"])

BROCHURES_DIR = "app/static/brochures"
BROCHURES = {
    "personas": "BROCHURE-RI-CERTIFICACION-SECCION-PERSONAS-2023.pdf",
    "inspeccion": "BROCHURE-RI-CERTIFICACION-E-INSPECCION-2023.pdf",
    "reglas-inspeccion": "reglas-del-servicio-de-inspeccion.pdf",
}


@router.get("/")
async def list_brochures():
    files = []
    for key, filename in BROCHURES.items():
        path = os.path.join(BROCHURES_DIR, filename)
        if os.path.exists(path):
            files.append({"id": key, "filename": filename, "url": f"/static/brochures/{filename}"})
    return {"brochures": files}


@router.get("/{brochure_id}")
async def get_brochure(brochure_id: str):
    filename = BROCHURES.get(brochure_id)
    if not filename:
        raise HTTPException(status_code=404, detail="Brochure no encontrado")

    path = os.path.join(BROCHURES_DIR, filename)
    if not os.path.exists(path):
        raise HTTPException(status_code=404, detail="Archivo no disponible")

    return FileResponse(path, filename=filename, media_type="application/pdf")
