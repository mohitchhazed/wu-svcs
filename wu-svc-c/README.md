## Local Installation and Testing

### Installation 

Make sure you have **NodeJS** installed and `npm` command works at the command line. If Yes, run the following commands in root folder of this project to run the project.

```sh 
# To build 
npm install 

# To run
npm start
```

### Testing 

While the server is running hit the URL of the form [http://127.0.0.1:8080/api?cnty=XYZ&amt=10.0&fees=12.50&promos=-3](http://127.0.0.1:8080/api?cnty=XYZ&amt=10.0&fees=12.50&promos=-3)

## On OpenShift 

```sh 
# To deploy a new app in your current namespace
oc new-app https://github.com/vchintal/wu-svcs --context-dir=wu-svc-c

# To expose the route 
oc expose service wu-svc-c --path=/api
```
