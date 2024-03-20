FROM python:3.11-alpine

WORKDIR /track-microservice

COPY . /track-microservice

ENV RDS_HOST "xxxxx"
ENV RDS_PORT "xxxxx"
ENV RDS_USER "xxxxx"
ENV RDS_PASSWORD "xxxxx"
ENV RDS_DATABASE "xxxxx"

RUN apk add build-base && apk add libpq postgresql-dev

RUN pip install --no-cache-dir --upgrade -r /track-microservice/requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]