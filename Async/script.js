const p=new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise resolved");
    }, 5000)
    
});

async function handlePromise() {
    const val=await p;
    console.log("Hello world")
    console.log(val);
}

//handlePromise();

function getData(){
    let value=p.then((res)=>console.log(res + " from get data"));
    console.log("Promise will not wait");
}

 //getData();

 function fileUpload(file, delay=0){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(delay){
                resolve(`${file} uploaded after ${delay} seconds`)
            }else{
                reject(`${file} rejected!`)
            }
        }, delay)
       
    })
 }

 let f1=fileUpload("nameList", 200);
 let f2=fileUpload("JobList", 600);
let f3=fileUpload("SalaryList", 800);
let f4=fileUpload("CompanyList");
// console.log(f3.then((res)=>console.log(res)));
// console.log(f1.then((res)=>console.log(res)));
// console.log(f4.then((res)=>console.log(res)));
// console.log(f2.then((res)=>console.log(res)));
Promise.myAll=function(promises){
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Input must be an array"));

        }
    return new Promise((resolve,reject)=>{
          const results = [];
    let resolvedCount = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(value => {
          results[i] = value;
          resolvedCount++;
          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(err => reject(err));

         if (promises.length === 0) {
            resolve([]);
        }
    });
    })
}
Promise.myAll([f1, f2, f3, f4]).then((res)=>{
    console.log(res);
}).catch((c)=>{
     console.log(c);
})

Promise.myAll([f1, Promise.reject("fail"), f3])
  .then(console.log)
  .catch(console.error); // "fail"


Promise.MyallSettled=function(promises){
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Input must be an array"));

        }
    return new Promise((resolve,reject)=>{
          const results = [];
          let settledCount = 0;
   promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(value => {
          results[i] = { status: "fulfilled", value };
        })
        .catch(reason => {
          results[i] = { status: "rejected", reason };
        })
        .finally(() => {
          settledCount++;
          if (settledCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

 
Promise.MyallSettled([f1, f2, f3, f4]).then((res)=>{
    console.log(res);
 }).catch((c)=>{
     console.log(c);
})


// Promise.any([f1, f2, f3, f4]).then((res)=>{
//     console.log(res);
// }).catch((c)=>{
//      console.log(c);
// })


async function uploader(){
    try{
        
        let b = fetch ("https://jsonplaceholder.typicode.com/posts");
        return (await b).json();
    }catch{
        console.log("failed")
    }
  
}

console.log(uploader().then((res)=>{
   let filtered=res.filter((f)=>f.id%5===0);
   console.log(filtered);
}));

 
