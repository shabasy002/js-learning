function MemoizeFib(fn){
    let cache={};
   return function(...args){
    let key = JSON.stringify(args);
    
    if (key in cache) {
        return cache[key] + ' coming from cache';
        
      } else {
        const result = fn.apply(this, args);
        console.log(args);
        cache[key] = result;
        return result;
      }
    
   }
   
}

function multiply(a, b, c) {
    return a * b * c;
  }
let multiplyMem=MemoizeFib(multiply);
console.log(multiplyMem(6, 4, 4));
console.log(multiplyMem(6, 4, 4));
//console.log(multiply(5, 6, 4));

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  const fib = MemoizeFib(fibonacci);

  function factorial(n) {
    let result=1;
   
    if(n<=1){
        return n;
    }else{
        for(i=1;i<=n;i++){
            result *= i;
        }
    }
    return (result);
  }

 
  const fac = MemoizeFib(factorial);
//   console.log(fac(5));
//   console.log(fac(5));
//   console.log(fac(6));
//   console.log(fac(6));

function memoizeId(fn){
    let cache={};
    let result;
    return function(...args){
        let key=JSON.stringify(args);
        console.log(key);
        if(key in cache){
            console.log("from cache");
            result= cache[key];
        }else{
            const value = fn.apply(this, args);
            cache[key]=value;
            result=value;
          
        }
        return result;
    }
}
function fetchData(id) {
    console.log("Fetching data for", id);
    return { id, data: "Sample Data" };
  }
  

  let mem=memoizeId(fetchData);
  function searchHandler(event) {
    console.log('Searching for:', event.target.value);
  }
  var count=0
  function HandleClick(event) {
   
    count=count+1;
    console.log('click:', count);
  }
  const debouncedSearch = debounce(searchHandler, 500);
  const debouncedClick = debounce(HandleClick, 500);
  document.getElementById('searchInput').addEventListener('input', debouncedSearch);
  document.getElementById('submit').addEventListener('click', debouncedClick);

  function debounce(fn, delay){
    let timer;
     return function(...args){
        clearTimeout(timer);
        const context = this; 
        timer=setTimeout(function(){
            fn.apply(context, args);
        },delay)
     };
  }

  const dropdown = document.getElementById('dropdown');
  const toggleBtn = document.getElementById('dropdownToggle');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const selectedText = document.getElementById('selectedValue');

  // Toggle dropdown open/close
  toggleBtn.addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });

  // Select option
  dropdownMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('dropdown-item')) {
      selectedText.textContent = e.target.textContent;
      dropdown.classList.remove('show');
    }
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });
//   console.log(mem(30));
//   console.log(mem(30));
//   console.log(mem(70));








let person={
    name:"Ajay",
    age:30,
    id:45
}
let person2={
    name:"Vjay",
    age:40,
    id:75
}
function memoizeObj(fn) {
    const cache = new Map();

    return function(...args) {
        let key = JSON.stringify(args); // For more serious apps, you can improve this.
        
        if (cache.has(key)) {
            console.log('From cache');
            return cache.get(key);
            
        } else {
            const result = fn.apply(this, args);
            cache.set(key, result);
            return result;
        }
    };
}
function printObject(obj){
    for(key in obj){
        return obj[key];
    }
}
let print=memoizeObj(printObject);
// console.log(print(person));
// console.log(print(person));
// console.log(print(person2));
// console.log(print(person));

setTimeout(() => {
    console.log("this is the first message");
  }, 5000);
  setTimeout(() => {
    console.log("this is the second message");
  }, 3000);
  setTimeout(() => {
    console.log("this is the third message");
  }, 1000);

function throttle(fn, delay){
  let timer;
  return function(...args){
    if(!timer){
      fn.apply(this, args);
      timer = true;
      setTimeout(function() {
        timer = false;
      }, delay);
    }
  };
}
  function handleScroll() {
    console.log("Scrolled to:", window.scrollY);
  }

    window.addEventListener('scroll', throttle(handleScroll, 200));

  
    


    class Car{
      constructor(make){
        this.make=make;
      }
      drive(){
        return "I will drive this car";
      }
    }

    class benz extends Car{
      constructor(make) {
        super(make); // pass make to parent constructor
      }
    }
 
    benz.prototype.drive=function(){
      return "i over rided";
    }

    let arr=[1, 2, 3, 6, 11, 9, 8];

    let newArr=arr.reduce((ar)=>ar>5);
    console.log(newArr);


    function curry(...args){
      return function(a){
        return function(b){
          return function (c){
            return (a+b+c);
          }
        }
       
      }
    }

    const nums = [1, 2, 3, 4, 5, 6];

    let result=nums.filter((n)=>n%2===0).map((n)=>n*n).reduce((acc, curr) => acc + curr, 0);


    function debounceFn(fun, delay){
      let timer;
      return function(...args){
        clearTimeout(timer);
        let context=this;
        timer=setTimeout(function(){
          fn.apply(context, args);
        },delay)
      }
    }

    function memoizeFn(fun){
      let cache={};
      let result;
      return function(...args){
        let key=JSON.stringify(args);
        if (cache[key]) {
          return cache[key];
        } else {
          let result = fun.apply(this, args);
          cache[key] = result;
          return result;
        }
        }
      }
    
  let player={
    name:"ajay",
    team:"india",
    age:"30",
    eligibility:function(){
      if(this.age>30){
        return `${this.name} is eligible for captain`;
      }
    }
  }

  let captain={
    name:"vijay",
    age:35,
  }

  let resultt=player.eligibility.call(captain);
  console.log(resultt);