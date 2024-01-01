FROM node:20.9.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx ngcc --properties ec2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build
FROM nginx:stable
COPY --from=build /app/front1/angular/browser /usr/share/nginx/html
EXPOSE 80
