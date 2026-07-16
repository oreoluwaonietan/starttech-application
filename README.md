# StartTech Application

## Overview
Full-stack application with React frontend and Golang backend deployed on AWS EKS.

## Structure
- frontend/ — React application
- backend/ — Golang REST API
- k8s/ — Kubernetes manifests
- .github/workflows/ — CI/CD pipelines

## Deployment
Backend deploys automatically on push to main when backend/ or k8s/ changes.
Frontend deploys automatically on push to main when frontend/ changes.
