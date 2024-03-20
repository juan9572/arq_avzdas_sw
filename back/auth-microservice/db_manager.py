from decouple import config
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

host = config('RDS_HOST', default=None)
port = config('RDS_PORT', default=5432, cast=int)
user = config('RDS_USER', default=None)
password = config('RDS_PASSWORD', default=None)
database_name = config('RDS_DATABASE', default=None)

DATABASE_URL = f"postgresql://{user}:{password}@{host}:{port}/{database_name}"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()