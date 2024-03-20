from typing import List
from db_manager import get_db
from sqlalchemy.orm import Session
from fastapi import FastAPI, Depends
from schemas import UserResponse, User, AuthSuccess
from endpoints import get_users, authenticate_user, authenticate_admin, check_user_permissions

app = FastAPI()

@app.post("/authAdmin/", response_model=AuthSuccess)
async def authenticate_admin_user(admin: User, db: Session = Depends(get_db)):
    user = authenticate_admin(db, admin)
    check_user_permissions(db, user, admin.zone)
    return AuthSuccess()

@app.post("/auth/", response_model=AuthSuccess)
async def authenticate(user: User, db: Session = Depends(get_db)):
    user_query = authenticate_user(db, user)
    check_user_permissions(db, user_query, user.zone)
    return AuthSuccess()

@app.get("/users/", response_model=List[UserResponse])
async def get_all_users(db: Session = Depends(get_db)):
    query_users = get_users(db)
    return [UserResponse(name=user.name, cedula=user.cedula, age=user.age, email=user.email)
             for user in query_users]