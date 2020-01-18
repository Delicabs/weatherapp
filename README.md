#Eficode Weather-application


## Modifications to baseproject

I modified tha backend API fetch to fetch a little more data.
The data is then fetched in the frontend and the used to show new & more data. We use the the image, description, current temperature and what the weather actually feels like. Cleaned the the baseproject with ES lint. 
Attatch your API=KEY to the .env file wich can be found on the project root. 


#### Getting started with your minikube
First we need to start minikube: 
```
sudo minikube start --vm-driver=none
```

Second we need to access the dashboard: 
```
sudo minikube dashboard (press ctrl+c when you see message with http://1270.0...
```
Then we do a port forward to keep the dashboard up with nohup 
```
nohup kubectl port-forward -n kubernetes-dashboard service/kubernetes-dashboard --address 0.0.0.0 <port>:80 &
```
Third we deploy our images
change < services > = to a name you want for your deployment.
change < container > = to the container you want to deploy.

```
kubectl run <service> --image=<container-name>:<container-tag>--image-pull-policy=Never
```
Expose your deployment.
```
kubectl expose deployment <service> --type=NodePort --port <port>
```
Then we will expose our service outside of vagrant. 
```
kubectl port-forward service/<name> --address 0.0.0.0 <port>:<external-port>
```

### Usage :
Now you should be able to see dashboard and your deployments in their own determined localhost:ports. 
