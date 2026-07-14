Write-Host "=== 1. Build del frontend ===" -ForegroundColor Cyan
Set-Location frontend
npm install
npm run build
Set-Location ..

Write-Host "`n=== 2. Unificar estáticos ===" -ForegroundColor Cyan
$backendStatic = "backend\static"
if (Test-Path $backendStatic) { Remove-Item -Recurse -Force $backendStatic }
New-Item -ItemType Directory -Path $backendStatic -Force | Out-Null

# Copia el build de Vite (assets/, index.html, favicon.png)
Copy-Item -Recurse "frontend\dist\*" $backendStatic -Force

# Copia imágenes de equipos a backend/static/static/images/
Copy-Item -Recurse "backend\app\static\images" "$backendStatic\static\" -Force

# Crea carpeta de brochures vacía
New-Item -ItemType Directory -Path "$backendStatic\static\brochures" -Force | Out-Null

Write-Host "`n=== 3. Entorno virtual Python ===" -ForegroundColor Cyan
Set-Location backend
if (-not (Test-Path ".venv")) {
    python -m venv .venv
}
.\.venv\Scripts\Activate
pip install -r requirements.txt
Set-Location ..

Write-Host "`n=== 4. Prueba rapida ===" -ForegroundColor Cyan
Write-Host "Ejecuta esto manualmente:" -ForegroundColor Yellow
Write-Host "  cd backend" -ForegroundColor White
Write-Host "  .\.venv\Scripts\Activate" -ForegroundColor White
Write-Host "  uvicorn app.main:app --host 0.0.0.0 --port 80" -ForegroundColor White
Write-Host "`nAbre el navegador en: http://localhost" -ForegroundColor Green
