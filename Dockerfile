FROM  node:lts-alpine3.18 AS build

WORKDIR /app

COPY package*.json  ./
# RUN npm cache clean --force
RUN npm install

RUN  npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points

COPY  .   /app
# RUN ls -al   # Check the current directory contents
RUN npm run build --prod
# RUN ls -al dist   # Check if the dist folder is generated


FROM nginx:stable

COPY  default.conf  /etc/nginx/conf.d

COPY  --from=build /app/front-end1/angular/browser  /usr/share/nginx/html
EXPOSE 80


#FROM httpd
#COPY --from=build /app/front-end1/angular/browser /usr/local/apache2/htdocs/
#
