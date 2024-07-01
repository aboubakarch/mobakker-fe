# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3500

# Command to run the application
CMD ["yarn", "start"]

