from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
import os

# Connects to the PostGIS container defined in docker-compose.yml
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://sentinel_admin:secure_password_123@database:5432/cybercrime_db")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
