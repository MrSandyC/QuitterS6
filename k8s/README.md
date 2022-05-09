# K8S Work in progress
K8S work in progress
### 1. Create image registry
k3d comes with a handy CLI tool to create and manage locally running cluster. In order to share your docker images with this cluster you'll need a image registry. To create this registry run the following command.
```bash
k3d registry create kw-r --port 4500
```

Commands to create cluster
```
k3d cluster create kw --servers 1 --agents 1 --port 9080:80@loadbalancer --registry-use kw-r:5000 --registry-config registries.yaml
```

Is cluster running?
```
kubectl get nodes
```

Build your project
```bash 
docker build -t localhost:<port-of-project>/project:v0.1 $PATH_TO_PROJECT
```

Push the project
```bash
docker push localhost:<port>/project:v0.1
```

## Deployment
Deploy images to the kubernetes cluster with the following command
```bash
kubectl apply -f deployment-file.yml
```

## Check deployment status
Command to check if deployment was succesful
```bash
kubectl get deployment
```

## Port forward pods
Usage of the `kubectl port-forward` command.
```bash
kubectl port-forward [NAME-OF-POD] <Port>
```

## Exposing project
This can be done by deploying a kubernetes service for the project.
Which can be done by the following command;
```bash
kubectl apply -f service.yaml
```

## Deploy kubernetes ingress
The last step is to deploy ingress. This tells kubernetes how to traffic from externally is routed to each and every service.
```bash
kubectl apply -f ingress.yaml
```

# Current deployment in k8s
Currently the project has the gateway 'deployed' in the k8s stack. To get this up to standards, I need to add the ingress and service to access them
from my windows/linux machine.
- Frontend deployed, working on getting ingress to work


# Troubleshooting
Is the container not running? Run the following command:
```
kubectl get pods
kubectl describe pods <NAME>
```
This returns 