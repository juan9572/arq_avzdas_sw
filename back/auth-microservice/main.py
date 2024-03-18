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
print(DATABASE_URL)
engine = create_engine(DATABASE_URL)
print(engine)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
print(SessionLocal)

app = FastAPI()

@app.post("/auth/")
async def autenticar(user: User):
    try:
        print(user)
        print("Ok connection")
        db = SessionLocal()
        user_db = db.query(Users).filter(Users.username == username, Users.password == password).first()
        print("Query ok")
        if not user_db:
            raise HTTPException(status_code=401, detail="Credenciales inválidas")

        permisos = db.query(Permissions).filter(Permissions.id_user == user_db.id, Permissions.id_zone == zone).first()
        if not permisos:
            raise HTTPException(status_code=403, detail="El usuario no tiene permisos para acceder a esta zona")

        return {"mensaje": "Autenticación exitosa"}
    except Exception as e:
        print("Error:", e)
        raise HTTPException(status_code=500, detail="Error interno del servidor")
