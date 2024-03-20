from pydantic import BaseModel
from datetime import datetime

class TrackingAccessCreate(BaseModel):
    user_id: int
    name: str
    zone_id: int
    zone_name: str
    status_access: str

class TrackResponse(BaseModel):
    name: str
    zone_name: str
    date: datetime
    status_access: str