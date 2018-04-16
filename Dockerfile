FROM node:alpine

EXPOSE 80

RUN apk add --no-cache nginx

WORKDIR /app

COPY package.json .
RUN yarn install

COPY misc/nginx.conf /etc/nginx/nginx.conf

COPY . .

RUN yarn run build

CMD ["nginx"]
