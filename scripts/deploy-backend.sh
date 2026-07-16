#!/bin/bash
aws eks update-kubeconfig --name starttech-cluster --region $AWS_REGION
kubectl apply -f k8s/
kubectl rollout status deployment/backend-api --timeout=300s
