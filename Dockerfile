# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all app files to the container
COPY . .

# Build the React app for production
RUN npm run build

# Expose port 3000 (or the port your React app uses)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]