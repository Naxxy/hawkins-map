# Build stage: compile the Vite app into static files
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ARG BASE_PATH=/
ENV BASE_PATH=$BASE_PATH
RUN npm run build

# Serve stage: nginx's default config serves the static build as-is
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
