FROM node:latest
RUN apt update
WORKDIR /var/www
COPY . .
CMD npm i && npm run start
EXPOSE 3000
