=>Overview

This project demonstrates how to Dockerize a Node.js application with MongoDB as the database.
We have created Docker images locally for our application and MongoDB, and set up a custom Docker network for seamless communication between the containers. 
Note that the Docker images are built and used locally; no private repository (such as AWS ECR) is involved.

=>Dockerfile

The Dockerfile is used to build the Docker image for our Node.js application. It includes instructions to install dependencies and copy the application code into the container.

=>deployment-compose.yaml

The deployment-compose.yaml file defines and runs the services for our application and MongoDB. It sets up a custom network for communication between the services and mounts volumes for data persistence.

=>Running the Project

Build image for app using dockerfile
Build and Run the Docker Containers using compose files

=>Verify the Setup:

Check the running containers (docker ps)
Access the application:
Open a web browser and navigate to http://localhost:3001 for accessing application.

=>Notes

The Docker images are built locally on your machine. We haven't used any private repository for storing the images.
The custom network "deployment-network" ensures that the application and MongoDB containers can communicate with each other using their service names.
