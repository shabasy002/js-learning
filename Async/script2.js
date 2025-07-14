const myPromise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let x=2+2;
       if(x===4){
        resolve("resolved")
       }else{
        reject("failed")
       }
    }, 500)
});

myPromise.then((message)=>{
    console.log("success")
}).catch((error)=>{
    console.log("error")
})

let x;
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(function(response){
    if(response.ok){
        return(response.json());
    } else {
      throw new Error("HTTP error: " + response.status); // 🚨 Handle non-2xx
    }
   
}).then(data => console.log(data))
.catch(err => console.error(err));

