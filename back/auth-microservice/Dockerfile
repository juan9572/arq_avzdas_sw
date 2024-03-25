FROM python:3.11-alpine

WORKDIR /auth-microservice

COPY . /auth-microservice

RUN apk add build-base && apk add libpq postgresql-dev

RUN pip install --no-cache-dir --upgrade -r /auth-microservice/requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]