Para compilar la imagen de dokcer nos
docker build -t track-service:1.0 .
Para ejecutar la imagen
docker run -d --name track -p 8000:80 track-service:1.0