from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, ForeignKey

Base = declarative_base()

class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password = Column(String)
    role = Column(String)

class Permissions(Base):
    __tablename__ = 'permissions'

    id = Column(Integer, primary_key=True, index=True)
    id_user = Column(Integer, ForeignKey('users.id'))
    id_zone = Column(Integer, ForeignKey('zones.id'))

    user = relationship("users", back_populates="permissions")
