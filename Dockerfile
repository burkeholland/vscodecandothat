FROM node:alpine

EXPOSE 80

RUN apk add --no-cache nginx

WORKDIR /app

COPY dist/ /app/
COPY misc/nginx.conf /etc/nginx/nginx.conf

CMD ["nginx"]
