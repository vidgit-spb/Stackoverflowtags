let  port = 8000;

listener = app.listen(port);

var server = new Server();
class Server{
constructor(port){
    this.port = port;
}

startServer(){
let promise = new Promise((resolve,reject) =>{
    resolve(listener.start());
})

promise
.then(()  => console.log('Server started succesfully'))
.catch(() => console.log('Server cant start for sone reason'));
}

stopServer(){
    let promise = new Promise((resolve,reject) =>{
        resolve(listener.close());
    })
promise
.then(()  => console.log(('Server stopped succesfully')))
.catch(() => console.log('Server cant be stopped'))
}

}

