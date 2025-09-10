# Stage 1: Build the React + TS app
FROM node:18 AS build

WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./
COPY tsconfig*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app using nginx
FROM nginx:alpine

# Copy build output from Stage 1
COPY --from=build /app/dist /usr/share/nginx/html


# Expose port 80
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
