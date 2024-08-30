Docker and Kubernetes-Based Microservices Project
Project Overview

This project demonstrates a microservices-based web application built using Docker and Kubernetes. The application is designed to showcase a modular architecture where each microservice is independently developed, deployed, and scaled. The microservices communicate with each other using REST APIs, and the entire application is containerized and orchestrated using Kubernetes.
Microservices

The project consists of the following microservices:

    Authentication Service
        Port: 3000
        Description: Manages user authentication, including login functionality. Uses Express.js with EJS templating for views. It handles user credentials and session management.

    Product Service
        Port: 5000
        Description: Manages product-related operations such as listing, adding, and updating products. Built with Node.js and Express.js, it connects to a MongoDB instance for storing product data.

    Order Service
        Port: 8080
        Description: Handles order processing, including creating, viewing, and managing orders. This service interacts with both the Product and Payment Services to ensure accurate order fulfillment.

    Payment Service
        Port: 8000
        Description: Processes payments for orders. It connects to a MySQL database to manage payment records and integrates with external payment gateways for real transactions.

Technologies Used

    Docker: Each microservice is containerized using Docker, ensuring consistency across development and production environments.
    Docker Compose: Used for defining and running multi-container Docker applications locally.
    Kubernetes: Manages the deployment, scaling, and operations of the containerized microservices across a cluster.
    Node.js & Express.js: Backend framework used to build the services.
    PostgreSQL: Used as the database for the Authentication Service.
    MongoDB: Used as the database for the Product Service.
    MySQL: Used as the database for the Payment Service.
    
    
    
    Project Directory Structure
    
    
    docker/
│
├── auth-service/
│   ├── Dockerfile
│   ├── app.js
│   ├── package.json
│   ├── routes/
│   │   └── auth.js
│   └── views/
│       └── login.ejs
│
├── product-service/
│   ├── Dockerfile
│   ├── app.js
│   ├── package.json
│   ├── routes/
│   │   └── product.js
│   └── views/
│       └── product.ejs
│
├── order-service/
│   ├── Dockerfile
│   ├── app.js
│   ├── package.json
│   ├── routes/
│   │   └── order.js
│   └── views/
│       └── order.ejs
│
├── payment-service/
│   ├── Dockerfile
│   ├── app.js
│   ├── package.json
│   ├── routes/
│   │   └── payment.js
│   └── views/
│       └── payment.ejs
│
├── docker-compose.yml
└── kubernetes/
    ├── auth-service-deployment.yaml
    ├── product-service-deployment.yaml
    ├── order-service-deployment.yaml
    ├── payment-service-deployment.yaml
    └── service.yaml

    
    docker/
│
├── auth-service/
│   ├── Dockerfile
│   ├── app.js
│   ├── package.json
│   ├── routes/
│   │   └── auth.js
│   └── views/
│       └── login.ejs
│
├── product-service/
│   ├── Dockerfile
│   ├── app.js
│   ├── package.json
│   ├── routes/
│   │   └── product.js
│   └── views/
│       └── product.ejs
│
├── order-service/
│   ├── Dockerfile
│   ├── app.js
│   ├── package.json
│   ├── routes/
│   │   └── order.js
│   └── views/
│       └── order.ejs
│
├── payment-service/
│   ├── Dockerfile
│   ├── app.js
│   ├── package.json
│   ├── routes/
│   │   └── payment.js
│   └── views/
│       └── payment.ejs
│
├── docker-compose.yml
└── kubernetes/
    ├── auth-service-deployment.yaml
    ├── product-service-deployment.yaml
    ├── order-service-deployment.yaml
    ├── payment-service-deployment.yaml
    └── service.yaml
    
    
    
    
    
    1. Docker Commands

    Build Docker Image:

    bash

docker build -t <username>/<service-name>:<tag> .

Example:

bash

docker build -t manoharbn/auth-service:v1 .

List Docker Images:

bash

docker images

Run a Docker Container:

bash

docker run -p <host-port>:<container-port> <username>/<service-name>:<tag>

Example:

bash

docker run -p 3000:3000 manoharbn/auth-service:v1

Stop a Running Container:

bash

docker stop <container-id>

Remove Docker Container:

bash

docker rm <container-id>

Push Docker Image to Docker Hub:

bash

docker login
docker push <username>/<service-name>:<tag>

Example:

bash

    docker push manoharbn/auth-service:v1

2. Docker Compose Commands

    Start Services with Docker Compose:

    bash

docker-compose up --build

Stop Services with Docker Compose:

bash

docker-compose down

View Running Containers:

bash

    docker-compose ps

3. Kubernetes Commands

    Start Minikube:

    bash

minikube start

Deploy Services to Kubernetes:

bash

kubectl apply -f <yaml-file>

Example:

bash

kubectl apply -f auth-service-deployment.yaml

Get List of Deployments:

bash

kubectl get deployments

Get List of Pods:

bash

kubectl get pods

Get List of Services:

bash

kubectl get services

Delete Deployment:

bash

kubectl delete deployment <deployment-name>

Example:

bash

kubectl delete deployment auth-service

Expose a Deployment:

bash

kubectl expose deployment <deployment-name> --type=NodePort --port=<container-port>

Example:

bash

kubectl expose deployment auth-service --type=NodePort --port=3000

Access Minikube Dashboard:

bash

minikube dashboard

Get Minikube IP:

bash

    minikube ip

4. General Linux Commands

    Change Directory:

    bash

cd <directory-name>

List Files in a Directory:

bash

ls

Create a Directory:

bash

mkdir <directory-name>

View File Contents:

bash

cat <file-name>







