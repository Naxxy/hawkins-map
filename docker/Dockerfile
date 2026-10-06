# Build stage: compile the Vite app into static files
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ARG BASE_PATH=/
ENV BASE_PATH=$BASE_PATH
RUN npm run build
# Pre-compress text files; httpd serves the .gz copy to browsers that accept gzip
RUN find dist -type f -regex '.*\.\(html\|js\|css\|svg\|json\|webmanifest\)' -exec gzip -9k {} +

# Serve stage: BusyBox httpd is a ~4 MB static file server
FROM busybox:1.37-musl
COPY --from=build /app/dist /www
RUN echo '.webmanifest:application/manifest+json' > /etc/httpd.conf
EXPOSE 80
CMD ["httpd", "-f", "-p", "80", "-h", "/www"]
