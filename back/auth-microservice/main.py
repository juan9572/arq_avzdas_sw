from models import Usuario
from decouple import config
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from fastapi import FastAPI, HTTPException

port = config('RDS_HOST', default=None)
host = config('RDS_PORT', default=5432, cast=int)
user = config('RDS_USER', default=None)
password = config('RDS_PASSWORD', default=None)


#engine = create_engine("postgresql://usuario:contraseña@localhost/nombre_base_de_datos")
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

app = FastAPI()

@app.post("/auth/")
async def autenticar(username: str, password: str, zone: str):
    db = SessionLocal()
    usuario_db = db.query(Usuario).filter(Usuario.nombre == username, Usuario.password == password, Usuario.zona == zone).first()
    if not usuario_db:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")
    return {"mensaje": "Autenticación exitosa"}