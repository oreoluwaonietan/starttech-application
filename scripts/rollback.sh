#!/bin/bash
kubectl rollout undo deployment/backend-api
kubectl rollout status deployment/backend-api --timeout=300s
