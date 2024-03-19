from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, ForeignKey

Base = declarative_base()

class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password = Column(String)
    name = Column(String)
    cedula = Column(String)
    age = Column(Integer)
    email = Column(String)
    role_id = Column(Integer, ForeignKey('roles.id'))

    permissions = relationship("Permissions", back_populates="user")
    role = relationship("Roles")

class Permissions(Base):
    __tablename__ = 'permissions'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    zone_id = Column(Integer, ForeignKey('zones.id'))

    user = relationship("Users", back_populates="permissions")

class Roles(Base):
    __tablename__ = 'roles'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)