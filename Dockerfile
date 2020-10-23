# getting base image
FROM node:12
LABEL maintainer="djwave28@gmail.com"

WORKDIR /home/node/app
COPY app /home/node/app

RUN npm install
CMD npm run app

EXPOSE 8080








