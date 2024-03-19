from pydantic import BaseModel
from decouple import config
from sqlalchemy import create_engine
from models import Users, Permissions
from sqlalchemy.orm import sessionmaker
from fastapi import FastAPI, HTTPException
from typing import List

host = config('RDS_HOST', default=None)
port = config('RDS_PORT', default=5432, cast=int)
user = config('RDS_USER', default=None)
password = config('RDS_PASSWORD', default=None)
database_name = config('RDS_DATABASE', default=None)

class User(BaseModel):
    username: str
    password: str
    zone: int

class AuthSuccess(BaseModel):
    detail: str = "Autenticación exitosa"

class UserResponse(BaseModel):
    name: str
    cedula: str
    age: int
    email: str

DATABASE_URL = f"postgresql://{user}:{password}@{host}:{port}/{database_name}"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

app = FastAPI()

def close_connection(db):
    try:
        db.close()
    except:
        pass

@app.post("/authAdmin/")
async def autenticarAdmin(admin: User):
    db = SessionLocal()
    try:
        user_db = db.query(Users).filter(Users.username == admin.username, Users.password == admin.password).first()
        if not user_db:
            raise HTTPException(status_code=401, detail="Credenciales inválidas")

        if user_db.role.name != 'Administrador':
            raise HTTPException(status_code=403, detail="No tiene permisos de administrador")

        print(admin)
        permisos = db.query(Permissions).filter(Permissions.user_id == user_db.id, Permissions.zone_id == admin.zone).first()
        
        if not permisos:
            raise HTTPException(status_code=403, detail="El usuario no tiene permisos para acceder a esta zona")

        return AuthSuccess()
    finally:
        close_connection(db)

@app.post("/auth/")
async def autenticar(user: User):
    db = SessionLocal()
    try:
        user_db = db.query(Users).filter(Users.username == user.username, Users.password == user.password).first()
        if not user_db:
            raise HTTPException(status_code=401, detail="Credenciales inválidas")

        permisos = db.query(Permissions).filter(Permissions.user_id == user_db.id, Permissions.zone_id == user.zone).first()
        if not permisos:
            raise HTTPException(status_code=403, detail="El usuario no tiene permisos para acceder a esta zona")

        return AuthSuccess()
    finally:
        close_connection(db)

@app.get("/users/", response_model=List[UserResponse])
async def get_users():
    db = SessionLocal()
    try:
        query_users = db.query(Users).all()
        return [UserResponse(name=user.name, cedula=user.cedula, age=user.age, email=user.email)
                 for user in query_users]
    finally:
        close_connection(db)