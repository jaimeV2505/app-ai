import os

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from pydantic import BaseModel

load_dotenv()

app = FastAPI(title="Nordic Explorer AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")


def get_openai_client() -> OpenAI:
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise HTTPException(status_code=500, detail="OPENAI_API_KEY no configurada")
    return OpenAI(api_key=api_key)


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/chat", response_model=ChatResponse)
def chat(body: ChatRequest):
    message = body.message.strip()
    if not message:
        raise HTTPException(status_code=400, detail="El mensaje no puede estar vacío")

    try:
        client = get_openai_client()
        completion = client.chat.completions.create(
            model=MODEL,
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are Nordic Explorer AI, an elite luxury travel architect "
                        "specializing in Nordic and Arctic journeys (Norway, Iceland, Sweden, "
                        "Finland, Faroe Islands). Respond in the user's language with a refined, "
                        "concise tone. Structure itineraries with day-by-day highlights, estimated "
                        "budget ranges in EUR, seasonal considerations, and exclusive experiences "
                        "(private yachts, glass igloos, heli-safaris, Michelin dining). Never mention "
                        "being a demo. Be specific and aspirational like a venture-backed concierge platform."
                    ),
                },
                {"role": "user", "content": message},
            ],
        )
        reply = completion.choices[0].message.content or ""
        return ChatResponse(reply=reply)
    except Exception as e:
        raise HTTPException(status_code=502, detail=str(e)) from e
