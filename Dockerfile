# ---------- Stage 1: Build ----------
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy only package.json and lock file first (better caching)
COPY package*.json ./

# Install dependencies (use npm ci for clean & fast installs)
RUN npm ci --legacy-peer-deps

# Copy the rest of the project files
COPY . .

# Set Node memory limit (4GB) to prevent OOM
ENV NODE_OPTIONS=--max-old-space-size=4096

# Build the Vite project (outputs to /app/dist by default)
RUN npm run build

# ---------- Stage 2: Run ----------
FROM nginx:alpine

# Copy built files from build stage to nginx's html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy default nginx config (optional but recommended)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
