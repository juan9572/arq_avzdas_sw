from fastapi import Depends, FastAPI, HTTPException, Query
from db_manager import get_db
from schemas import TrackingAccessCreate, TrackResponse
from endpoints import create_tracking_access, get_user_logs
from sqlalchemy.orm import Session

app = FastAPI()

@app.post("/trackAccess/")
async def track_access(params: TrackingAccessCreate, db: Session = Depends(get_db)):
    try:
        return create_tracking_access(db, params)
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error al insertar el registro de acceso") from e

@app.get("/trackUser/")
async def track_user(user_id: int = Query(...), db: Session = Depends(get_db)):
    return [TrackResponse(name=log.name, zone_name=log.zone_name, date=log.date , status_access=log.status_access)
            for log in get_user_logs(db, user_id)]