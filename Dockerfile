FROM node:16.19.1-alpine as build-stage

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

#NGINX 

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]