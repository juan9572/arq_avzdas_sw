Para compilar la imagen de dokcer nos
docker build -t track-microservice:1.0 .
Para etiquetar la imagen
docker tag track-service:1.0 xxxx.amazonaws.com/images:track-service-1.0
Para pushear la imagen al ECR
docker push xxxx.amazonaws.com/images
Para ejecutar la imagen
docker run -d --name track -p 8000:80 track-service:1.0