# Nordic Explorer AI

Plataforma de viajes de lujo nórdicos con **Next.js** + **Tailwind** + **shadcn/ui** (frontend), **FastAPI** + **OpenAI** (backend).

## Requisitos

- Node.js 20+
- Python 3.11+
- Docker y Docker Compose (opcional)
- API key de [OpenAI](https://platform.openai.com/api-keys)

## Estructura

```
mi-app-ai/
├── frontend/     # Next.js + Tailwind
├── backend/      # FastAPI + OpenAI
└── docker-compose.yml
```

## Ejecución local (sin Docker)

### 1. Backend

```bash
cd backend
cp .env.example .env
# Edita .env y añade OPENAI_API_KEY=sk-...
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API disponible en http://localhost:8000 — documentación en http://localhost:8000/docs

### 2. Frontend

En otra terminal:

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Abre http://localhost:3000

### Rutas principales

| Ruta | Descripción |
|------|-------------|
| `/` | Landing con hero animado y destinos |
| `/dashboard` | Panel con estadísticas y trending |
| `/planner` | Planificador de viajes con IA |
| `/destinations` | Catálogo interactivo de destinos |

### Probar el endpoint

```bash
curl -X POST http://localhost:8000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hola"}'
```

## Ejecución con Docker

Desde la raíz del proyecto:

```bash
cp backend/.env.example backend/.env
# Rellena OPENAI_API_KEY en backend/.env
docker compose up --build
```

- Frontend: http://localhost:3000
- Backend: http://localhost:8000

## Variables de entorno

| Archivo | Variable | Descripción |
|---------|----------|-------------|
| `backend/.env` | `OPENAI_API_KEY` | Clave de OpenAI (obligatoria) |
| `backend/.env` | `OPENAI_MODEL` | Modelo (por defecto `gpt-4o-mini`) |
| `frontend/.env` | `NEXT_PUBLIC_API_URL` | URL del backend (por defecto `http://localhost:8000`) |
