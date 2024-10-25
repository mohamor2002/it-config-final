# Stage 1: Build the frontend app using Vite
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Use an nginx image to serve the built files
FROM nginx:alpine

# Copy the built files from the build stage to the NGINX web directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
