# Penni ![CI/CD](https://github.com/nhsufi/Penni/workflows/CI/CD/badge.svg)

Penni is a budgeting app, but really it's just a playground for me to practice full stack development and CI/CD.

## Getting started

Follow these steps to run the app locally during development.

### Prerequisites

- Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Access to the Penni [Auth0](https://auth0.com/) app and the related `.env` file variables

### Running Locally

1. Clone the Git repository with
   `git clone git@github.com:nhsufi/Penni.git` and navigate to the root folder with
   `cd Penni`

2. Ensure you have the correct Node version installed and active
   `nvm use`

3. Install client and server dependencies
   `npm run install:dev`

4. Run client and server in parallel (logs are outputted to the console for debugging purposes)
   `npm run dev`

5. Navigate to `localhost:3000` in your browser to access the app

### Running Tests

Tests files are suffixed with `.test.ts` and can be run with the following commands:

- Client tests: `npm run test:client`
- Server tests: `npm run test:server`

## Docker

In production, the app runs in a docker container. Follow these steps to replicate this environment on your local machine.

### Prerequisites

- Install [Docker Desktop](https://www.docker.com/get-started)
- Access to the Penni [Auth0](https://auth0.com/) app and the related `.env` file variables

### Running Locally

1. Build the Docker image
   `docker build -t <image-name>:<tag-name>`

2. Run the Docker image in a container
   `docker run -d -p <port-number>:8080`

3. Navigate to `localhost:<port-number>` in your browser to access the app
