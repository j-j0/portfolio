# Makefile for React Portfolio Docker Commands
# Usage: make <command>

# Variables
PROJECT_NAME = my-website
CONTAINER_NAME = $(PROJECT_NAME)-server
IMAGE_NAME = $(PROJECT_NAME):latest
PORT = 3000

# Default target
.DEFAULT_GOAL := help

# Help command - shows available commands
help: ## Show this help message
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

# Development commands
build: ## Build the Docker image
	docker-compose build

up: ## Start the application (build if needed)
	docker-compose up --build

up-detached: ## Start the application in background
	docker-compose up --build -d

down: ## Stop and remove containers
	docker-compose down

restart: ## Restart the application
	docker-compose restart

# Utility commands
logs: ## Show application logs
	docker-compose logs -f

logs-tail: ## Show last 100 lines of logs
	docker-compose logs --tail=100

shell: ## Open shell in running container
	docker-compose exec server sh

# Cleanup commands
clean: ## Stop containers and remove images
	docker-compose down
	docker rmi $(IMAGE_NAME) 2>/dev/null || true

clean-all: ## Remove all containers, images, and volumes
	docker-compose down -v --rmi all --remove-orphans

prune: ## Remove unused Docker resources
	docker system prune -f

# Build commands
build-no-cache: ## Build without using cache
	docker-compose build --no-cache

rebuild: ## Clean build (no cache)
	$(MAKE) clean
	$(MAKE) build-no-cache

# Status commands
status: ## Show running containers
	docker-compose ps

images: ## Show Docker images
	docker images | grep $(PROJECT_NAME) || echo "No $(PROJECT_NAME) images found"

# Development helpers
dev: ## Quick start for development (build and run)
	$(MAKE) down
	$(MAKE) up

prod: ## Production build and run
	docker-compose -f compose.yaml up --build -d

# Port and URL helpers
url: ## Show application URL
	@echo "Application running at: http://localhost:$(PORT)"

open: ## Open application in browser (macOS)
	open http://localhost:$(PORT)

# Docker direct commands (without compose)
docker-build: ## Build Docker image directly
	docker build -t $(IMAGE_NAME) .

docker-run: ## Run Docker container directly
	docker run -d --name $(CONTAINER_NAME) -p $(PORT):80 $(IMAGE_NAME)

docker-stop: ## Stop Docker container directly
	docker stop $(CONTAINER_NAME) 2>/dev/null || true
	docker rm $(CONTAINER_NAME) 2>/dev/null || true

# Health check
health: ## Check if application is responding
	@curl -f http://localhost:$(PORT) > /dev/null 2>&1 && echo "✅ Application is healthy" || echo "❌ Application is not responding"

# Quick commands
quick-start: build up url ## Quick start: build, run, and show URL

# Google Cloud commands
check-registry: ## Check if image exists in Artifact Registry
	@echo "Checking Artifact Registry for portfolio image..."
	gcloud artifacts docker images list australia-southeast1-docker.pkg.dev/$(GCP_PROJECT_ID)/portfolio-docker-repo || echo "❌ Repository not found or not authenticated"

pull-from-registry: ## Pull latest image from Artifact Registry
	docker pull australia-southeast1-docker.pkg.dev/$(GCP_PROJECT_ID)/portfolio-docker-repo/portfolio:latest

test-registry-image: ## Test the image from Artifact Registry
	docker run -d --name registry-test -p 3001:80 australia-southeast1-docker.pkg.dev/$(GCP_PROJECT_ID)/portfolio-docker-repo/portfolio:latest
	@echo "Testing registry image at http://localhost:3001"
	@echo "Run 'make stop-registry-test' when done"

stop-registry-test: ## Stop the registry test container
	docker stop registry-test || true
	docker rm registry-test || true

.PHONY: help build up up-detached down restart logs logs-tail shell clean clean-all prune build-no-cache rebuild status images dev prod url open docker-build docker-run docker-stop health quick-start check-registry pull-from-registry test-registry-image stop-registry-test