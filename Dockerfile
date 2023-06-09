# build environment
FROM node:16 as build
WORKDIR /app
RUN npm install -g http-server
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
COPY package-lock.json .
RUN npm install 
RUN npm ci 
COPY . .
RUN npm run build

# production environment
# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]
CMD ["http-server", "build"]
# CMD [ "npm", "start" ]
