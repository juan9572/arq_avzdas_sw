Para compilar la imagen de docker
docker build -t auth-service:1.0 .
Para etiquetar la imagen
docker tag auth-service:1.0 xxxx.amazonaws.com/images:auth-microservice-1.0
Para pushear la imagen al ECR
docker push xxxx.amazonaws.com/images
Para ejecutar la imagen
docker run -d --name auth -p 8000:80 auth-service:1.0