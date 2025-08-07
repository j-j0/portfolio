# Terraform configuration for Jack's Portfolio Infrastructure
# This file defines what cloud resources we want to create

# Configure Terraform to use Google Cloud
terraform {
  required_version = ">= 1.0"
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

# Configure the Google Cloud Provider
provider "google" {
  project = var.project_id
  region  = var.region
  zone    = var.zone
}

# Create a Google Kubernetes Engine (GKE) cluster
# This is where your portfolio will run
resource "google_container_cluster" "portfolio_cluster" {
  name     = "portfolio-cluster"
  location = var.zone
  
  # Start with 1 node (we can scale later)
  initial_node_count = 1
  
  # Configure the nodes (virtual machines)
  node_config {
    machine_type = "e2-medium"  # Small, cost-effective
    disk_size_gb = 20           # 20GB storage per node
    
    # Permissions for the nodes
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
    
    # Labels to identify our resources
    labels = {
      project = "portfolio"
      owner   = "jack"
    }
  }
  
  # Enable basic features
  deletion_protection = false  # Allow deletion (for learning)
}

# Output important information after creation
output "cluster_name" {
  description = "Name of the Kubernetes cluster"
  value       = google_container_cluster.portfolio_cluster.name
}

output "cluster_location" {
  description = "Location of the Kubernetes cluster"
  value       = google_container_cluster.portfolio_cluster.location
}

output "cluster_endpoint" {
  description = "Endpoint of the Kubernetes cluster"
  value       = google_container_cluster.portfolio_cluster.endpoint
  sensitive   = true
}