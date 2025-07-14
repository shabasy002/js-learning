
// let jokeDiv=document.querySelector(".content-block");
// const loader = document.getElementById('loader');

// loader.style.display = 'block';

// fetch('https://icanhazdadjoke.com',{
//      headers: {
//     'Accept': 'application/json'
//   }
// })
// .then(response => response.json())
// .then(data => {
//     jokeDiv.textContent = data.joke;
//     loader.style.display = 'none';
//     } 
// )
// .catch(error => {
//     jokeDiv.textContent = 'Failed to load joke.'; 
//     loader.style.display = 'none';
// }
// );


let pr=new Promise((resolve, reject)=>{
  let a=2+2;
  if(a===5){
    resolve("success");
  }else{
    reject("failed");
  }
})

pr.then((m)=>{
  console.log(m)
}).catch((m)=>{
  console.log(m)
});

// const p1 = Promise.resolve("Done");           // resolves immediately
// const p2 = Promise.reject("Failed");          // rejects immediately
// const p3 = new Promise((res) => setTimeout(() => res("Slow"), 3000)); // resolves after 1s

// Promise.allSettled([p1, p2, p3]).then((results) => {
//   console.log("Results:");
//   results.forEach((r) => console.log(r.status, r.value || r.reason));
// });

// function createHello(){
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello after 2 seconds");
//     }, 2000);
//   });
// }

// createHello().then((message) => {
//   console.log(message); 
// });

// function checkNumber(n){
//   let number=n;
//   return new Promise((resolve, reject)=>{
//     if(n>=10){
//       resolve("Valid number");
//     }else{
//       resolve("Invalid number");
//     }
//   })
// }
// checkNumber(5)
//   .then((msg) => console.log("Success:", msg))
//   .catch((err) => console.log("Error:", err));

// checkNumber(15)
//   .then((msg) => console.log("Success:", msg))
//   .catch((err) => console.log("Error:", err));



// function number(n){
//     let num=n;
//     return new Promise((resolve, reject)=>{
//       resolve(n);
//     })
// }

// number(5)
//   .then((val) => {
//     return val * 2;        // Step 1: double it → 10
//   })
//   .then((val) => {
//     return val + 10;       // Step 2: add 10 → 20
//   })
//   .then((val) => {
//     console.log("Final value:", val); // Output: Final value: 20
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

//   function throwError() {
//   return new Promise((resolve, reject) => {
//     const hasError = true;

//     if (hasError) {
//       reject("Something went wrong!");
//     } else {
//       resolve("All good!");
//     }
//   });
// }

// // Using .catch() to handle the error
// throwError()
//   .then((msg) => {
//     console.log("Success:", msg);
//   })
//   .catch((err) => {
//     console.log("Caught Error:", err);  // Output: Caught Error: Something went wrong!
//   });

//   function delay(ms, value){
//     return new Promise((resolve, reject)=>{
//       setTimeout(() => {
//         resolve(value);
//       }, ms);
//     })
//   }

//   let pro1=delay(1000, "one");
//   let pro2=delay(2000, "Two");
//   let pro3=delay(3000, "Three");

//   Promise.all([pro1, pro2, pro3]).then(val=>{
//     console.log(val);
//   })

//   const p11 = new Promise((res) => setTimeout(() => res("A"), 1000));
//   const p12 = Promise.reject("B failed");
//   const p13 = new Promise((res) => setTimeout(() => res("C"), 2000));

//     Promise.all([p11, p12, p13]).then(val=>{
//     console.log(val);
//   }).catch(error=>{
//     console.log(error);
//   })
  
//   let f1=function getUser() {
//     return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//         resolve({ name: "Alice" })
//       }, 3000)
//     })

//   }

//     let f2=function getPosts() {
//     return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//         resolve(["Post 1", "Post 2"])
//       }, 2000)
//     })

//   }

//    let f3= function getComments() {
//     return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//         resolve(["Nice", "Great"])
//       }, 1000)
//     })

//   }

//   Promise.all([f1(), f2(), f3()]).then(val=>{
//     console.log(val);
//   })


//   function randomCheck(){
//     return new Promise((resolve, reject)=>{
//       if(Math.random().toFixed()>0){
//         resolve ("success")
//       }else{
//         resolve ("fail")
//       }
//     })
//     // Math.random().toFixed();
//   }

//  Promise.all([randomCheck(), randomCheck(), randomCheck()]).then(val=>{
//     console.log(val);
//   }).catch(error=>{
//     console.log(error);
//   })


//   function task(name, delay, shouldFail = false) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail) {
//         reject(`${name} failed`);
//       } else {
//         resolve(`${name} done`);
//       }
//     }, delay);
//   });
// }

// const p10 = task("Task 1", 1000);
// const p23 = task("Task 2", 500, true);
// const p34 = task("Task 3", 1500);

// Promise.allSettled([p10, p23, p34])
//   .then((results) => {
//     results.forEach((result, index) => {
//       if (result.status === "fulfilled") {
//         console.log(`✅ Promise ${index + 1}:`, result.value);
//       } else {
//         console.log(`❌ Promise ${index + 1}:`, result.reason);
//       }
//     });
//   });

  function loadComponent(name, time){
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
      console.log(`${name} is loading...`);
      resolve(`Loaded ${name}`);
    }, time);

     })
  }

 let l1=loadComponent("UI", 1000);
 let l2=loadComponent("Authentication", 2000);
 let l3=loadComponent("Data Fetch", 3000);
 let l4=loadComponent("Terms", 4000);
let l5=loadComponent("Analytics", 4000);


// Promise.all([l1, l2, l3, l4, l5]).then((result=>{
//   console.log(result);
// }))



// function fetchModule(name, time) {
//   return new Promise((resolve, reject) => {
//     const shouldFail = Math.random() < 0.3; // 30% failure rate
//     setTimeout(() => {
//       if (shouldFail) {
//         reject(`Failed to load ${name}`);
//       } else {
//         resolve(`Loaded ${name}`);
//       }
//     }, time);
//   });
// }

// // List of components to load
// const modules = [
//   { name: "UI", time: 1000 },
//   { name: "Authentication", time: 1500 },
//   { name: "Data Fetch", time: 2000 },
//   { name: "Terms", time: 2500 },
//   { name: "Analytics", time: 3000 },
// ];

// // Create array of promises
// const promises = modules.map(m => fetchModule(m.name, m.time));

// Promise.allSettled(promises).then((results) => {
//   const finalModules = results.map((result, index) => {
//     const moduleName = modules[index].name;
//     if (result.status === "fulfilled") {
//       return result.value;
//     } else {
//       return `Fallback for ${moduleName}`;
//     }
//   });

//   console.log("✅ Final module list:");
//   console.log(finalModules);
// });

// function uploadFile(fileName, time){
//   return new Promise((resolve, reject)=>{
//     const shouldFail = Math.random() < 0.4;
//     setTimeout(()=>{
//        if (shouldFail) {
//         reject(`❌ Upload failed for ${fileName}`);
//       } else {
//          resolve(`✅ Uploaded  ${fileName}`);
//       }
//     }, time)
//   })
// }

// let file1=uploadFile("fileA.jpg", 7000);
// let file2=uploadFile("fileB.jpg", 1500);
// let file3=uploadFile("fileC.jpg", 2000);
// let file4=uploadFile("fileD.jpg", 2500);
// let file5=uploadFile("fileD.jpg", 3000);

// Promise.allSettled([file1, file2, file3, file4, file5]).then((result)=>{
//  let success=result.filter((res)=>res.status==="fulfilled");
//  let failed=result.filter((res)=>res.status==="rejected");
//   console.log("✅ Uploaded files:");
//   success.forEach((msg) => console.log("  ", msg));
//   console.log("\n❌ Failed files:");
//   failed.forEach((msg) => console.log("  ", msg));
//  console.log(`${success.length} uploads succeeded ${failed.length} failed`);
// })

// Promise.any([file1, file2, file3, file4, file5]).then((result)=>{
//   console.log(result);
// })


Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err); // Reject immediately on any error
        });
    });
  });
};


Promise.myAll([l1, l2, l3, l4, l5])
  .then(results => console.log("All files uploaded:", results))
  .catch(error => console.error("Upload failed:", error));