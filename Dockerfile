# Etapa 1: Build de Angular
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration production

# Etapa 2: Servir con NGINX
FROM nginx:alpine
COPY --from=build /app/dist/frontend-entidades /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
