FROM node

RUN npm install -g pm2 gulp

ADD package.json /app/package.json

RUN cd /app && npm install

ADD . /app

WORKDIR /app

RUN gulp dist

EXPOSE 3999

CMD pm2 start --name app /app/server.js && pm2 logs app
