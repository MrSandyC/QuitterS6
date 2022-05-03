# K8S Work in progress
K8S work in progress

Commands to create cluster
```k3d cluster create kw \
    --servers 1 \
    --agents 1 \
    --port 9080:80@loadbalancer \
    --registry-use kw-r:7000 \
    --registry-config registries.yaml```

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

# Deployment
Deploy images to the kubernetes cluster with the following command
```bash
kubectl apply -f deployment-file.yml
```

# Check deployment status
Command to check if deployment was succesful
```bash
kubectl get deployment
```

# Port forward pods
Usage of the `kubectl port-forward` command.
```bash
kubectl port-forward [NAME-OF-POD] <Port>
```

# Exposing project
This can be done by deploying a kubernetes service for the project.
Which can be done by the following command;
```bash
kubectl apply -f service.yaml
```

# Deploy kubernetes ingress
The last step is to deploy ingress. This tells kubernetes how to traffic from externally is routed to each and every service.
```bash
kubectl apply -f ingress.yaml
```
