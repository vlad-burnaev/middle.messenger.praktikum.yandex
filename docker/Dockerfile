FROM ubuntu:18.04
RUN apt update && apt install -y nodejs && apt install -y npm
WORKDIR /var/www
COPY ./docker-test.js docker-test.js
EXPOSE 3000
CMD node docker-test.js
