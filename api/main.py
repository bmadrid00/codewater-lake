from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from authenticator import authenticator
from routers import cabins, users, reservations, reviews


app = FastAPI()
app.include_router(cabins.router, tags=['Cabins'])
app.include_router(reservations.router, tags=['Reservations'])
app.include_router(users.router, tags=['Users'])
app.include_router(authenticator.router, tags=['Users'])
app.include_router(reviews.router, tags=['Reviews'])

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
