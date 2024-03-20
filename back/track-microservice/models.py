from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime

Base = declarative_base()

class TrackingAccess(Base):
    __tablename__ = 'tracking_access'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer)
    name = Column(String)
    zone_id = Column(Integer)
    zone_name = Column(String)
    date = Column(DateTime, default=datetime.now())
    status_access = Column(String)