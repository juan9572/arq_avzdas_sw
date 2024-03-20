import requests
from typing import List
from schemas import User
from fastapi import HTTPException
from sqlalchemy.orm import Session
from models import Users, Permissions, Zones

def get_users(db: Session) -> List[User]:
    return db.query(Users).order_by(Users.id).all()

def authenticate_user(db: Session, user: User) -> User:
    user_db = db.query(Users).filter(Users.username == user.username, Users.password == user.password).first()
    if not user_db:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")
    return user_db

def authenticate_admin(db: Session, admin: User) -> User:
    user = db.query(Users).filter(Users.username == admin.username, Users.password == admin.password).first()
    if not user:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")
    if user.role.name != 'Administrador':
        raise HTTPException(status_code=403, detail="No tiene permisos de administrador")
    return user

def check_user_permissions(db: Session, user: User, zone_id: int):
    zone = db.query(Zones).filter(Zones.id == zone_id).first()
    permissions = db.query(Permissions).filter(Permissions.user_id == user.id, Permissions.zone_id == zone_id).first()

    data = {
        "user_id": user.id,
        "name": user.name,
        "zone_id": zone.id,
        "zone_name": zone.name,
        "status_access": "ACCESO AUTORIZADO" if permissions else "ACCESO DENEGADO"
    }
    print(data)
    # endpoint_url = "http://direccion_del_otro_endpoint" #TODO
    # response = requests.post(endpoint_url, json=data)

    if not permissions:
        raise HTTPException(status_code=403, detail="El usuario no tiene permisos para acceder a esta zona")