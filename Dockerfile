FROM node:11 AS node-builder
WORKDIR /src
COPY . .
RUN npm install -g @angular/cli@8.3.23
RUN npm install

RUN ng build --base-href=/static/ --deploy-url /static/ --prod --output-path dist/egp-launcher-fe/static --output-hashing none --single-bundle true

FROM nginx:1.15.2-alpine
COPY --from=node-builder /src/dist/egp-launcher-fe/static /usr/share/nginx/html/static
COPY nginx.site.template /etc/nginx/conf.d/
CMD envsubst '${BACKEND_URI}' < /etc/nginx/conf.d/nginx.site.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'
