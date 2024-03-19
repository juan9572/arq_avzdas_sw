Para compilar la imagen de dokcer nos
docker build -t auth-service:1.0 .
Para ejecutar la imagen
docker run -d --name auth -p 8000:80 auth-service:1.0