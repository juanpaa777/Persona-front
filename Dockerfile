FROM nginx:1.17.1-alpine
COPY dist/frontend-entidades /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf