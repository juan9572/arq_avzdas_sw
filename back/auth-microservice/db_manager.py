from decouple import config
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

host = config('RDS_HOST_AUTH', default=None)
port = config('RDS_PORT_AUTH', default=5432, cast=int)
user = config('RDS_USER_AUTH', default=None)
password = config('RDS_PASSWORD_AUTH', default=None)
database_name = config('RDS_DATABASE_AUTH', default=None)

DATABASE_URL = f"postgresql://{user}:{password}@{host}:{port}/{database_name}"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()