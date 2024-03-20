FROM python:3.11-alpine

WORKDIR /track-microservice

COPY . /track-microservice

ENV RDS_HOST "logs-1.clm602cmcvfu.us-east-1.rds.amazonaws.com"
ENV RDS_PORT "5432"
ENV RDS_USER "admin_db_rds"
ENV RDS_PASSWORD "7aA1shW-"
ENV RDS_DATABASE "postgres"

RUN apk add build-base && apk add libpq postgresql-dev

RUN pip install --no-cache-dir --upgrade -r /track-microservice/requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]