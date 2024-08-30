# DOCKER-CAPSTONE-MINI-PROJECT
A microservices-based web app with Authentication, Product, Order, and Payment Services. Built using Node.js, Express, Docker, and Kubernetes, it features RESTful APIs, PostgreSQL, MongoDB, and MySQL. Deployed with Docker Compose and Kubernetes, ensuring modularity, scalability, and reliability.


Docker and Kubernetes-Based Microservices Project
Project Overview

This project demonstrates a microservices-based web application built using Docker and Kubernetes. The application is designed to showcase a modular architecture where each microservice is independently developed, deployed, and scaled. The microservices communicate with each other using REST APIs, and the entire application is containerized and orchestrated using Kubernetes.
Microservices

project architecture:

![image](https://github.com/user-attachments/assets/8064147e-890b-42e8-8a7f-32aed8db8ba1)


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

Setup and Deployment
Docker

    Build and Run with Docker Compose:
        Clone the repository:

        bash

GITHUB ID- https://github.com/manoharkolar/DOCKER-CAPSTONE-MINI-PROJECT.git

Navigate to the project directory:

bash

cd your-repo-name/docker

Build and start the services:

bash

        docker-compose up --build

    Docker Hub:
        All Docker images for the microservices are available on Docker Hub under the manoharbn namespace.

Kubernetes

    Deploy on Kubernetes:
        Ensure Minikube or any Kubernetes cluster is running:

        bash

minikube start

Apply the Kubernetes configuration files:

bash

        kubectl apply -f ./kubernetes

        Access the services using the Minikube IP and NodePort.

Key Features

    Modular Microservices: Each service can be developed, deployed, and scaled independently.
    Containerization: Docker ensures that the application runs consistently in any environment.
    Orchestration with Kubernetes: Manages the complex deployment of microservices, ensuring reliability and scalability.
    Database Integration: Each microservice is backed by its own database, showcasing a polyglot persistence approach.

Future Enhancements

    CI/CD Integration: Implement continuous integration and deployment pipelines for automated testing and deployment.
    Monitoring & Logging: Add tools like Prometheus and Grafana for monitoring, and ELK stack for centralized logging.
    API Gateway: Introduce an API Gateway for better routing and load balancing across services.

Conclusion

This project provides a comprehensive example of how to build and deploy a microservices architecture using Docker and Kubernetes. It demonstrates best practices in containerization, orchestration, and scalable architecture, making it a valuable reference for modern application development.
