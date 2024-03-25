from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from decouple import config

host = config('RDS_HOST_TRACK', default=None)
port = config('RDS_PORT_TRACK', default=5432, cast=int)
user = config('RDS_USER_TRACK', default=None)
password = config('RDS_PASSWORD_TRACK', default=None)
database_name = config('RDS_DATABASE_TRACK', default=None)

DATABASE_URL = f"postgresql://{user}:{password}@{host}:{port}/{database_name}"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()