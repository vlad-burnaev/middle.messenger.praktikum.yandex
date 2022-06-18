FROM ubuntu:22.04
RUN apt update && apt install -y nodejs && apt install -y npm
WORKDIR /var/www
COPY . .
CMD npm i && npm run start
EXPOSE 3000
