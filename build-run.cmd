docker build -t strail-dev/homepage:latest .
docker run -d -p 3000:3000 --name strail-homepage strail-dev/homepage:latest