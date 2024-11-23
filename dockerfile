# Stage 1: Build the React frontend
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY Frontend/package*.json ./frontend/

# Navigate to the frontend directory
WORKDIR /app/frontend

# Install frontend dependencies
RUN npm install

# Build the React app
RUN npm run build

# Stage 2: Serve the built frontend and run Node.js backend
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the backend code and package.json for backend
COPY Backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the built React app to the backend's public directory
COPY --from=build /app/frontend/build ./public

# Copy the rest of the backend code
COPY Backend/ .

# Expose the port your Node.js server runs on
EXPOSE 5173
EXPOSE 3000

# Start the backend server
CMD ["node", "server.js"]
