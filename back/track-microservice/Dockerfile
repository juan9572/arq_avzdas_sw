FROM python:3.11-alpine

WORKDIR /track-microservice

COPY . /track-microservice

RUN apk add build-base && apk add libpq postgresql-dev

RUN pip install --no-cache-dir --upgrade -r /track-microservice/requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]