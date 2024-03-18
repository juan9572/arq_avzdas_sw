from pydantic import BaseModel
from decouple import config
from sqlalchemy import create_engine
from models import Users, Permissions
from sqlalchemy.orm import sessionmaker
from fastapi import FastAPI, HTTPException

host = config('RDS_HOST', default=None)
port = config('RDS_PORT', default=5432, cast=int)
user = config('RDS_USER', default=None)
password = config('RDS_PASSWORD', default=None)
database_name = config('RDS_DATABASE', default=None)

class User(BaseModel):
    username: str
    password: str
    zone: int

DATABASE_URL = f"postgresql://{user}:{password}@{host}:{port}/{database_name}"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

app = FastAPI()

@app.post("/auth/")
async def autenticar(user: User):
    db = SessionLocal()
    user_db = db.query(Users).filter(Users.username == user.username, Users.password == user.password).first()
    if not user_db:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

    permisos = db.query(Permissions).filter(Permissions.user_id == user_db.id, Permissions.zone_id == user.zone).first()
    if not permisos:
        raise HTTPException(status_code=403, detail="El usuario no tiene permisos para acceder a esta zona")

    return {"detail": "Autenticación exitosa"}