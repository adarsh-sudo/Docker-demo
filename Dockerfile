# Use a Node.js 16 (or higher) base image
FROM node:16

# Set environment variables
ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

# Create the application directory
RUN mkdir C:\my-app\app

# Copy application files to the container
COPY ./my-app C:\my-app\app

# Set the working directory
WORKDIR C:\my-app\app

# Install dependencies
RUN npm install

# Command to run the application
CMD ["node", "server.js"]
