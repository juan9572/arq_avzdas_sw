from pydantic import BaseModel

class AuthSuccess(BaseModel):
    detail: str = "Autenticación exitosa"

class User(BaseModel):
    username: str
    password: str
    zone: int

class UserResponse(BaseModel):
    name: str
    cedula: str
    age: int
    email: str