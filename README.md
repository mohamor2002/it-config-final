# Network Traffic Management System

This project is a comprehensive network traffic management system that simulates an Internet Service Provider (ISP) environment with various services running in a Docker containerized setup. It consists of a backend application managing the network services and a frontend interface for user interaction.

## Project Structure

```
/
├── back-app
│   ├── db/           # Database service
│   ├── isp-server/   # Internet Service Provider (ISP) server
│   ├── router/       # Network router service
│   ├── rest-api/     # REST API for external access
│   ├── client/       # Client-side app  
│   └── model-server/ # Reinforcement Learning (RL) Model server app
└── front-app         # Frontend interface
```

## Services

- **Database Service**: Manages all data-related operations and persists client and traffic information.
- **ISP Server**: Controls bandwidth allocation and traffic management for connected clients.
- **Router Service**: Handles communication between clients and facilitates data transfer.
- **REST API**: Provides external access to the application's functionalities.
- **Client Application**: Simulates client behavior and interacts with the router.
- **Model Server**: Hosts a Reinforcement Learning model that predicts bandwidth requirements based on real-time data.

## Requirements

- Docker
- Docker Compose

## Running the Project

To run the entire project, navigate to the root directory of the project and execute the following command:

```bash
docker-compose up --build
```

> **Disclaimer**: Docker is necessary to run this project, and it may take significant time and both physical and network resources depending on your machine's capabilities.

## Usage

Once the services are up and running, you can access the dashboard application at [http://localhost:5173](http://localhost:5173) to monitor network traffic and client activities, as well as ispect RL Model performance.

