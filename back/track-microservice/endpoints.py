from models import TrackingAccess
from sqlalchemy.orm import Session
from schemas import TrackingAccessCreate
from sqlalchemy import desc

def create_tracking_access(db: Session, params: TrackingAccessCreate):
    tracking_access = TrackingAccess(
        user_id=params.user_id,
        name=params.name,
        zone_id=params.zone_id,
        zone_name=params.zone_name,
        status_access=params.status_access
    )
    db.add(tracking_access)
    db.commit()
    db.refresh(tracking_access)
    return tracking_access

def get_user_logs(db: Session, user_id: int):
    return db.query(TrackingAccess).filter(TrackingAccess.user_id == user_id)\
        .order_by(desc(TrackingAccess.date)).all()