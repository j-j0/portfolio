# Cloud-Native Portfolio with Automated CI/CD

This isn't just a portfolio website; it's a demonstration of a complete, automated DevOps workflow. The React application serves as the payload for an enterprise-grade delivery system built on Google Cloud Platform, Kubernetes, and Infrastructure as Code.

[![Build, Push, and Deploy](https://github.com/j-j0/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/j-j0/portfolio/actions)

## 🚀 Live Demo

The project is deployed live to a public IP address on Google Cloud:

- **Live Site**: [http://34.54.179.243](httphttp://34.54.179.243)  _(**Note**: Replace with your Ingress IP address)_

## 🏛️ Architecture Overview

The entire lifecycle of this application, from a code commit to a live deployment, is fully automated.

```mermaid
graph LR
    subgraph "Developer's Machine"
        A[git push]
    end

    subgraph "GitHub Actions CI/CD"
        B(Workflow Triggered)
        C{Test & Lint}
        D[Build Docker Image]
        E[Push to Artifact Registry]
        F[Deploy to GKE]
    end

    subgraph "Google Cloud Platform"
        G[Artifact Registry]
        H(GKE Cluster)
        I([Live Website])
    end

    A --> B
    B --> C
    C -- success --> D
    D --> E
    E --> G
    B -- on main branch push --> F
    F -- kubectl set image --> H
    H -- pulls new image from --> G
    H -- serves --> I