from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, ForeignKey

Base = declarative_base()

class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password = Column(String)
    role_id = Column(String)

    permissions = relationship("Permissions", back_populates="user")

class Permissions(Base):
    __tablename__ = 'permissions'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    zone_id = Column(Integer, ForeignKey('zones.id'))

    user = relationship("Users", back_populates="permissions")