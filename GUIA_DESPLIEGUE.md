# Guía de Despliegue — R.I Certificación

## Stack del proyecto

| Capa         | Tecnología                                             |
|--------------|--------------------------------------------------------|
| Frontend     | React 19 + TypeScript + Vite 8 + Tailwind v4           |
| Backend      | Python 3.12+ / FastAPI + Uvicorn                       |
| Base de datos| **Ninguna** (todo es archivos planos + SMTP)           |
| Dependencias | `pip install -r requirements.txt` → 7 librerías ligeras|

---

## Requisitos para las 3 opciones

La aplicación se compone de dos partes que deben estar presentes en el servidor:

1. **Build del frontend** → carpeta `dist/` (HTML, JS, CSS, imágenes, PDFs)
2. **Backend Python** → sirve los archivos estáticos + la API

### Archivos que deben estar accesibles vía HTTP

Rutas que el frontend espera (verificadas en el código):

```
/static/images/logo-ri.png
/static/images/1-1.png, 1.png, 2.png, 3.png
/static/images/icono4.png, icono5.png, icono6.png
/static/images/fondo_cert.jpg, imagen-certificado4.jpg, foto_politicas.jpg
/static/images/IMG-20210915-WA0002.jpg
/static/images/equipos/*.png          ← 23 imágenes de equipos de izaje
/static/brochures/*.pdf               ← Folletos y documentos descargables
/assets/*                             ← JS/CSS compilados por Vite
/favicon.png
```

### ⚠️ PDFs faltantes (debes subirlos manualmente)

El código referencia estos PDFs pero la carpeta `backend/app/static/brochures/` está **vacía** (solo contiene `.gitkeep`). Debes colocarlos tú:

| Ruta esperada | Referenciado en |
|---|---|
| `/static/brochures/BROCHURE-RI-CERTIFICACION-SECCION-PERSONAS-2023.pdf` | Home.tsx, CertificationDetail.tsx |
| `/static/brochures/BROCHURE-RI-CERTIFICACION-E-INSPECCION-2023.pdf` | Home.tsx |
| `/static/brochures/CP-RE-005-Formato-Solicitud.pdf` | Politicas.tsx |
| `/static/brochures/CP-RG-001-Reglamento-Certificacion.pdf` | Politicas.tsx |
| `/static/brochures/reglas-del-servicio-de-inspeccion-de-equipos-de-izaje-de-cargas-y-aparejos.pdf` | Equipos1.tsx |
| `/static/brochures/7.5-PROCEDIMIENTO-QUEJAS-APELACIONES.pdf` | Equipos1.tsx |
| `/static/brochures/13-OCP-005-Vig-ONAC.pdf` | Conozcanos.tsx |
| `/static/brochures/19-OIN-095.pdf` | Conozcanos.tsx |

### ⚠️ Bug conocido: imágenes `equipos/`

Las imágenes de equipos (`backend/app/static/images/equipos/*.png`) **no están** en `frontend/public/static/images/equipos/`. El build de Vite copia solo lo que está en `public/`. En producción sin Docker estas imágenes **no se servirán** a menos que las copies manualmente al directorio estático que sirve el backend.

**Solución incluida** en los pasos de cada opción.

### Variables de entorno (.env)

El backend necesita un archivo `.env` en `backend/`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-correo@gmail.com
SMTP_PASSWORD=tu-contraseña-o-app-password
EMAIL_TO=comercial@ricertificacion.com
```

Si no se configura SMTP, los formularios se imprimen en consola (modo dev) pero **no se envían correos**.

---

## Opción 1 — Linux EC2 + Uvicorn (recomendada)

### Prerrequisitos en la instancia

- SO: Amazon Linux 2023 o Ubuntu 22.04/24.04
- Security Group: puertos **22** (SSH), **80** (HTTP), **443** (HTTPS) abiertos
- Dominio apuntando a la IP elástica (opcional para HTTPS)

### Paso a paso

```bash
# 1. Conectarse por SSH
ssh -i tu-key.pem ec2-user@<IP-PUBLICA>

# 2. Instalar dependencias del sistema
# Amazon Linux:
sudo yum update -y && sudo yum install -y python3 python3-pip nodejs npm git
# Ubuntu:
sudo apt update && sudo apt install -y python3 python3-pip python3-venv nodejs npm git

# 3. Clonar el repositorio (o subir los archivos con scp)
git clone <URL-DEL-REPO>
cd CertificacionR.I

# 4. Build del frontend
cd frontend
npm ci
npm run build
cd ..

# 5. Crear estructura estática unificada
# El backend espera los archivos en backend/static/
# (está configurado como FRONTEND_DIR = backend/static/ en main.py)
mkdir -p backend/static

# Copiar el build de Vite
cp -r frontend/dist/* backend/static/

# Copiar imágenes de equipos (las que están en backend/app/static/images/equipos/)
# al directorio estático servido
cp -r backend/app/static/images backend/static/
# Copiar brochures (los PDFs que coloques)
mkdir -p backend/static/brochures
# Pon tus PDFs en backend/app/static/brochures/ y luego:
cp -r backend/app/static/brochures backend/static/

# 6. Configurar backend
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Crear .env con credenciales SMTP
nano .env
# (pegar las variables de entorno)

# 7. Probar que funciona
uvicorn app.main:app --host 0.0.0.0 --port 8000
# Abrir http://<IP-PUBLICA>:8000
# Ctrl+C para detener

# 8. Configurar como servicio systemd (para que no se muera)
sudo nano /etc/systemd/system/ricertificacion.service
```

Contenido del servicio:

```ini
[Unit]
Description=R.I Certificación API
After=network.target

[Service]
Type=simple
User=ec2-user
WorkingDirectory=/home/ec2-user/CertificacionR.I/backend
Environment=PATH=/home/ec2-user/CertificacionR.I/backend/.venv/bin
ExecStart=/home/ec2-user/CertificacionR.I/backend/.venv/bin/uvicorn app.main:app --host 0.0.0.0 --port 8000 --proxy-headers --forwarded-allow-ips *
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable ricertificacion
sudo systemctl start ricertificacion
sudo systemctl status ricertificacion
```

```bash
# 9. (Opcional) Nginx como proxy reverso + SSL
sudo apt install -y nginx certbot python3-certbot-nginx  # Ubuntu
# sudo yum install -y nginx certbot                       # Amazon Linux

sudo nano /etc/nginx/sites-available/ricertificacion
```

```nginx
server {
    listen 80;
    server_name ricertificacion.com www.ricertificacion.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/ricertificacion /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# SSL con Let's Encrypt
sudo certbot --nginx -d ricertificacion.com -d www.ricertificacion.com
```

### Resumen de estructura final (Linux)

```
CertificacionR.I/
├── frontend/
│   └── dist/               ← build de Vite (ya no se usa directo)
├── backend/
│   ├── .env                ← credenciales SMTP
│   ├── .venv/              ← entorno virtual Python
│   ├── requirements.txt
│   ├── app/
│   │   ├── main.py         ← sirve la SPA + API
│   │   ├── config.py
│   │   ├── routers/
│   │   ├── models/
│   │   ├── services/
│   │   └── static/         ← imágenes originales + brochures
│   │       ├── images/
│   │       │   └── equipos/
│   │       └── brochures/
│   └── static/             ← LO QUE SIRVE EL BACKEND (unificado aquí)
│       ├── assets/         ← JS/CSS compilados
│       ├── static/         ← (sí, anidado) imágenes servidas
│       │   ├── images/
│       │   │   └── equipos/
│       │   └── brochures/
│       ├── favicon.png
│       └── index.html
```

> **Nota sobre la ruta anidada**: El backend monta `/static` en `backend/static/static/` (porque `FRONTEND_DIR = backend/static/` y `static_dir = FRONTEND_DIR / "static"`). Es confuso pero funciona. Si quieres simplificar, puedes modificar `main.py` para montar todo desde `backend/static/` directamente sin el subdirectorio `static/`.

---

## Opción 2 — Windows + IIS + ARR (Proxy Inverso)

Ideal si la política de la empresa exige IIS. La app Python corre por detrás e IIS redirige el tráfico.

### Prerrequisitos

- Windows Server 2019/2022
- EC2 Security Group: puertos **3389** (RDP), **80**, **443** abiertos
- Node.js 20+ (descargar de [nodejs.org](https://nodejs.org))
- Python 3.12+ (descargar de [python.org](https://python.org), marcar "Add to PATH")

### Paso a paso

```powershell
# 1. Conectarse por RDP a la instancia

# 2. Instalar IIS + URL Rewrite + ARR
#    Server Manager → Add Roles and Features → Web Server (IIS)
#    Asegurar que está instalado:
#    - Common HTTP Features → Static Content, Default Document
#    - Health and Diagnostics → Http Logging
#    - Performance → Static Content Compression
#    - Management Tools → IIS Management Console
#
#    Descargar e instalar:
#    - URL Rewrite: https://www.iis.net/downloads/microsoft/url-rewrite
#    - ARR 3.0: https://www.iis.net/downloads/microsoft/application-request-routing

# 3. Abrir PowerShell como Administrador y preparar carpetas
md C:\inetpub\ricertificacion -Force
md C:\inetpub\ricertificacion\static\images\equipos -Force
md C:\inetpub\ricertificacion\static\brochures -Force
md C:\ricertificacion\backend -Force

# 4. Copiar el proyecto al servidor
#    (desde tu máquina local, usa scp o comprime y sube por RDP)
#    Descomprimir en C:\ricertificacion\

# 5. Build del frontend
cd C:\ricertificacion\frontend
npm ci
npm run build

# 6. Copiar build a la carpeta de IIS
Copy-Item -Recurse -Path "C:\ricertificacion\frontend\dist\*" -Destination "C:\inetpub\ricertificacion\" -Force

# 7. Copiar imágenes de equipos (no están en el build de Vite)
Copy-Item -Recurse -Path "C:\ricertificacion\backend\app\static\images\equipos" -Destination "C:\inetpub\ricertificacion\static\images\" -Force

# 8. Copiar brochures (los PDFs que hayas colocado)
Copy-Item -Recurse -Path "C:\ricertificacion\backend\app\static\brochures\*" -Destination "C:\inetpub\ricertificacion\static\brochures\" -Force

# 9. Crear entorno virtual e instalar backend
cd C:\ricertificacion\backend
python -m venv .venv
.\.venv\Scripts\Activate
pip install -r requirements.txt

# 10. Crear .env
@"
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-correo@gmail.com
SMTP_PASSWORD=tu-contraseña
EMAIL_TO=comercial@ricertificacion.com
"@ | Out-File -FilePath .env -Encoding utf8

# 11. Probar backend (se ejecuta en un puerto local)
uvicorn app.main:app --host 127.0.0.1 --port 8020 --proxy-headers --forwarded-allow-ips *
#    Dejarlo corriendo en esta ventana por ahora

# 12. Configurar IIS
#    Abrir IIS Manager (Inicio → "Internet Information Services (IIS) Manager")
#    - Click derecho en "Sites" → Add Website
#      - Site name: ricertificacion
#      - Physical path: C:\inetpub\ricertificacion
#      - Binding: HTTP | Port: 80 | Hostname: (dejar vacío o el dominio)

# 13. Habilitar ARR
#    En IIS Manager, click en el servidor (raíz) → Application Request Routing Cache
#    → Server Proxy Settings → marcar "Enable proxy"

# 14. URL Rewrite para API y SPA
#    Seleccionar el sitio "ricertificacion" → URL Rewrite → Add Rule(s) → Reverse Proxy
#    - Server name: localhost:8020
#    - Si pide habilitar ARR, aceptar
#
#    Esto crea una regla que envía TODO a localhost:8020.
#    PERO eso mataría los archivos estáticos servidos por IIS.
#
#    En su lugar, editar manualmente web.config en C:\inetpub\ricertificacion\:
```

**`C:\inetpub\ricertificacion\web.config`:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <!-- No reescribir archivos estáticos existentes -->
                <rule name="StaticFiles" stopProcessing="true">
                    <match url="^(assets|static|favicon\.png)(/.*)?$" />
                    <action type="None" />
                </rule>
                <!-- Proxy inverso para la API -->
                <rule name="API Proxy" stopProcessing="true">
                    <match url="^api/(.*)$" />
                    <action type="Rewrite" url="http://localhost:8020/api/{R:1}" />
                </rule>
                <rule name="Ping">
                    <match url="^ping$" />
                    <action type="Rewrite" url="http://localhost:8020/ping" />
                </rule>
                <!-- SPA catch-all: todo lo demás → index.html -->
                <rule name="SPA" stopProcessing="true">
                    <match url=".*" />
                    <conditions>
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="index.html" />
                </rule>
            </rules>
        </rewrite>
        <staticContent>
            <mimeMap fileExtension=".pdf" mimeType="application/pdf" />
            <mimeMap fileExtension=".png" mimeType="image/png" />
            <mimeMap fileExtension=".jpg" mimeType="image/jpeg" />
        </staticContent>
    </system.webServer>
</configuration>
```

```powershell
# 15. Convertir el backend en servicio Windows
#     Descargar NSSM: https://nssm.cc/download
#     Extraer nssm.exe a C:\Windows\System32\

nssm install RicertificacionBackend
```

**Configurar en la ventana de NSSM:**
- **Application** → Path: `C:\ricertificacion\backend\.venv\Scripts\uvicorn.exe`
- **Application** → Arguments: `app.main:app --host 127.0.0.1 --port 8020 --proxy-headers --forwarded-allow-ips *`
- **Application** → Startup directory: `C:\ricertificacion\backend`
- **Details** → Display name: `R.I Certificación Backend`
- **Exit actions** → Startup: `Application` (si se cae, reinicia servicio)

```powershell
# Iniciar el servicio
nssm start RicertificacionBackend

# 16. (Opcional) SSL con Let's Encrypt
#     Descargar win-acme: https://www.win-acme.com/
#     O usar Certify The Web: https://certifytheweb.com/
```

---

## Opción 3 — Windows + Uvicorn directo (sin IIS)

Más simple que IIS, pero no tienes el manejo de aplicaciones de IIS. Similar a la opción de Linux pero en Windows.

### Prerrequisitos

- Windows Server 2019/2022 o Windows 10/11
- EC2 Security Group: puertos **3389** (RDP), **80**, **443** abiertos
- Node.js 20+ ([nodejs.org](https://nodejs.org))
- Python 3.12+ ([python.org](https://python.org))

### Paso a paso

```powershell
# 1. Conectarse por RDP

# 2. Abrir PowerShell como Administrador

# 3. Clonar o copiar el proyecto
mkdir C:\ricertificacion -Force
# Copiar los archivos del proyecto aquí

# 4. Build del frontend
cd C:\ricertificacion\frontend
npm ci
npm run build

# 5. Unificar estáticos
mkdir C:\ricertificacion\backend\static -Force
Copy-Item -Recurse -Path "C:\ricertificacion\frontend\dist\*" -Destination "C:\ricertificacion\backend\static\" -Force

# 5b. Copiar imágenes de equipos (las que NO están en el build)
Copy-Item -Recurse -Path "C:\ricertificacion\backend\app\static\images\equipos" -Destination "C:\ricertificacion\backend\static\static\images\" -Force

# 5c. Copiar brochures (los PDFs que tengas)
Copy-Item -Recurse -Path "C:\ricertificacion\backend\app\static\brochures\*" -Destination "C:\ricertificacion\backend\static\static\brochures\" -Force

# 6. Instalar backend
cd C:\ricertificacion\backend
python -m venv .venv
.\.venv\Scripts\Activate
pip install -r requirements.txt

# 7. Crear .env
@"
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-correo@gmail.com
SMTP_PASSWORD=tu-contraseña
EMAIL_TO=comercial@ricertificacion.com
"@ | Out-File -FilePath .env -Encoding utf8

# 8. Probar
.\.venv\Scripts\uvicorn app.main:app --host 0.0.0.0 --port 80 --proxy-headers --forwarded-allow-ips *
# Abrir http://<IP-PUBLICA> en el navegador
# Ctrl+C para detener

# 9. Instalar como servicio Windows con NSSM
#    Descargar: https://nssm.cc/download
#    Extraer nssm.exe a C:\Windows\System32\

nssm install RicertificacionBackend
```

**En la ventana de NSSM configurar:**
- **Application** → Path: `C:\ricertificacion\backend\.venv\Scripts\uvicorn.exe`
- **Application** → Arguments: `app.main:app --host 0.0.0.0 --port 80 --proxy-headers --forwarded-allow-ips *`
- **Application** → Startup directory: `C:\ricertificacion\backend`
- **Details** → Display name: `R.I Certificación`
- **Exit actions** → Startup: `Application`

```powershell
nssm start RicertificacionBackend

# 10. Opcional: Firewall de Windows
New-NetFirewallRule -DisplayName "R.I Certificación 80" -Direction Inbound -Protocol TCP -LocalPort 80 -Action Allow

# 11. Opcional: SSL
#    Usar win-acme (https://www.win-acme.com/) o
#    poner un proxy Nginx en Docker que maneje SSL
```

---

## Comparativa rápida

| Aspecto | Linux + Uvicorn | Windows + IIS + ARR | Windows + Uvicorn |
|---|---|---|---|
| Complejidad | Baja | Alta | Media |
| Rendimiento | Excelente | Bueno | Excelente |
| SSL | Certbot (automático) | win-acme / Certify | win-acme |
| Servicio | systemd | NSSM | NSSM |
| Manejo de estáticos | FastAPI los sirve | IIS directo | FastAPI los sirve |
| Consola | SSH | RDP | RDP |
| Recomendación | ✅ Sí | ⚠️ Solo si obligatorio | ✅ Sí (simple) |

---

## Verificación post-despliegue

```bash
# Health check
curl http://<IP>/ping
# → {"status":"ok","version":"1.0.0"}

# API
curl http://<IP>/api/health
# → {"status":"ok"}

# Página principal
curl http://<IP>/
# → Debe devolver el HTML del SPA (index.html)
```

## Notas finales

- **No hay base de datos** — cero configuración de BD en todos los escenarios
- **SMTP**: sin las credenciales correctas en `.env`, los formularios de contacto y quejas no enviarán correos (solo se loguean en consola)
- **PDFs**: la carpeta `brochures/` está vacía en el repo; debes subir los PDFs reales manualmente
- **Imágenes equipos**: están en `backend/app/static/images/equipos/` pero **no** en `frontend/public/`. Hay que copiarlas manualmente al directorio servido (los pasos ya lo incluyen arriba)
- **Google Fonts**: `index.html` carga `Plus Jakarta Sans` desde Google Fonts → la instancia necesita acceso a Internet
- **Iframes**: las páginas de consulta de certificados cargan `intranet.ricertificacion.com` en iframes → necesita que ese dominio sea accesible desde el servidor
