# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Expose the port your app runs on
EXPOSE 5001

# Command to run the application
CMD ["npm", "start"]