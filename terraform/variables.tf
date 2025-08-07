# Variables for Terraform configuration
# These are like settings you can change without editing the main code

variable "project_id" {
  description = "Your Google Cloud Project ID"
  type        = string
  # You'll set this when running terraform
}

variable "region" {
  description = "Google Cloud region"
  type        = string
  default     = "australia-southeast1"
}

variable "zone" {
  description = "Google Cloud zone"
  type        = string
  default     = "australia-southeast1-a"
}

variable "cluster_name" {
  description = "Name of the Kubernetes cluster"
  type        = string
  default     = "portfolio-cluster"
}