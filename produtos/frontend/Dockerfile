FROM node:20 AS build

WORKDIR "/app"

COPY package.json ./

RUN npm install

COPY . .


RUN npm run build

# Serve stage
FROM nginx:1.25.1

# Copy the custom nginx.conf file to the container
COPY .docker/nginx.conf /etc/nginx/nginx.conf

# Copy the built React app from the build stage to the nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 81
EXPOSE 81

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]