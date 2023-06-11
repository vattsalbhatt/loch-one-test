FROM node:16 AS build
WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD [ "npm","run", "serve" ]

# FROM nginx:1.21
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /usr/src/app/build/ /usr/share/nginx/html
