function printUser({ name, ...details }) {
    console.log(name);
    console.log(details);
  }

  const user={
    name: 'John',
    age: 30,
    city: 'NY'

  }
  printUser(user);

  function merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  console.log(merge({ a:1, b:2 }, { b:3, c:4 }));
  // { a:1, b:3, c:4 }

 
  

function counterFn(){
    let count = 0;
    return {
        add: function add(){
            count++;
            return count;
        },
        minus: function minus(){
            count--;
            return count;
        }
    };
}

// const counter = counterFn();
// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.minus());

function onceFn(){
    let time=0;
    return{
        if(time=0){
            return "called once";
            time++;
        }

    }
}

function createPassword(password){
    return function(args) {
           if(args===password){
            return true;
           }else{
            return false;
           }
    }
}

const checkPassword = createPassword('mySecret');
// console.log(checkPassword('guess'));     // false
// console.log(checkPassword('mySecret'));  // true


function createMultiplier(multiplier){
        return function(args){
            return (args*multiplier);
        }
}

// const mult=createMultiplier(7);


function memoizeFn(fn){
    let cache={};
    let result;
    return function(...args){
        let key = JSON.stringify(args);
        if(cache.hasOwnProperty(key)){
            return cache[key];
        }else{
            let context=this;

            let result=fn.apply(context, args);
            cache[key]=result;
            return result;
            
        }
    }
}

 
function createIdGenerator(start){
    
   let count=start;
    return function(){
      return count++;
    }
}

let id=createIdGenerator(200);
// console.log(id());
// console.log(id());
// console.log(id());
// console.log(id());


function makeAdder(x){
    let start=x;
    return function(args){
        return (args+start);
    }
}

let add=makeAdder(10);
// console.log(add(20));

function createLimitedInvoker(fn, limit){
    let count=0;
    let l=limit;
    return function(...args){
       count=count+1;
        if(count<=l){
           return(fn.apply(this, args)) ;   
        }
}
}
function addition(){
    return 3+4;
}
let fun = createLimitedInvoker(addition, 3);
// console.log(fun());
// console.log(fun());
// console.log(fun());
// console.log(fun());
// console.log(fun());

function createPrivateStorage(){
    let obj={};

    return {
        set:function set(key, value){
            obj[key]=value;
        },
        get:function get(){
            return obj[key];
        }
    }
}

function createConfig(){
    let obj={};
    return {
        set:function set(key, value){
            obj[key]=value;
            return obj;
        },
        get:function get(key){
            return obj[key];
        },
        reset:function reset(){
            //dont know the code
        }
    }
}
function minLength(len){
    
    return function(args){
       
            return (args.length>=len);
        
    }
}
const isLongEnough = minLength(5);
// console.log(isLongEnough("hello")); // true
// console.log(isLongEnough("hi")); // false


let arr=[1,2,3,[3,4],[6,7],8,[9]];
let newArr=new Array();

newArr=arr.reduce((acc, num)=> acc.concat(num), []);
// console.log(newArr);

let arrObj=[{name: "Alice", age: 25}, {name: "Bob", age: 35}, {name: "Eve", age: 25}];
let filtArr=arrObj.filter((arr)=>arr.age>30);
//console.log(filtArr);
let str="hello";
let strArr=str.split('');
let obj={};

obj=strArr.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

console.log(obj);

function pluck(arr, key){
    let newArr=[];
    newArr=arr.map((a)=>a[key]);
    return newArr;
}

//console.log([{name: "Alice"}, {name: "Bob"}], "name");


const grouped = arrObj.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) {
        acc[age] = [];
    }
    acc[age].push(person.name);
    return acc;
}, {});

//console.log(grouped);

let fruitArr=["apple", "banana", "orange", "apple", "orange"];


let lenArray=[];

lenArray=fruitArr.map((fruit)=>({
    fruit: fruit,
    length: fruit.length
}));
//console.log(lenArray);

// console.log(
//     fruitArr.reduce((acc,fruit)=>{
//         acc[fruit] = fruit.length;
//   return acc;
//     },{})
// );

let capArray=[];

capArray=fruitArr.map((fruit)=>(fruit.charAt(0)).toUpperCase() + fruit.slice(1));
//console.log(capArray);

let nums=[1,2,3,4,5,6,7,8,9,9,10,12,11,8];


let oddeven=nums.reduce((acc, num)=>{
    if (num % 2 === 0) {
        acc.even = (acc.even || 0) + 1;
    } else {
        acc.odd = (acc.odd || 0) + 1;
    }
    return acc;
}, {});

//console.log(oddeven);

let count=fruitArr.reduce((acc, num)=>{
    acc=acc+num.length;
    return acc;
},0);

console.log(count);

let sent="Using dot notation is another common way to add a key-value pair to an object";
// console.log(
// sent.split(" ").reduce((acc, word)=>{
//     if(word.length>=acc.length){
//         acc=word;
//     }
//     return acc;
// },"")
// );

let input=[{a:1}, {b:2}, {c:3}];

let output=input.reduce((acc,element)=>{
    return Object.assign(acc, obj);
   
},{});

//console.log(output);

let charCount=fruitArr.reduce((acc, word)=>{
 (acc[word]=(acc[word]||0)+1);
 return acc;
},{});

//console.log(charCount);

let employe=[
    { id: 1, username: "alice", isActive: true },
    { id: 2, username: "bob", isActive: false }
  ];

  let activeMembers=employe.filter((emp)=>emp.isActive=true);

  const inputt = [
    { a: 5, b: 12 },
    { x: 1, y: 3 },
    { p: 20, q: 7 },
    { m: 8, n: 9 }
  ];

  let filtInput=inputt.filter(obj => 
    Object.values(obj).some(value => value > 10)
  );
  console.log(filtInput);

  Array.prototype.unique=function(){
    let len=this.length;
    let filtArr=[];
    if(len===0){
       return "nothing";
    }else if(len===1){
        return this;
    }else{
        for(let i=0;i<=this.length-1;i++){
            if(!filtArr.includes(this[i])){
                filtArr.push(this[i]);
            }
           }
    }
    
     
       return filtArr;
  }

  console.log(fruitArr.unique());

  Array.prototype.chunk=function(val){
        let chunked=[];
        let temp=[];
        //temp.length=val;
        for(let i=0;i<=this.length-1;i++){
            temp.push(this[i]);
          if(temp.length===val){
            chunked.push(temp);
            temp=[];
          }
        }
        if (temp.length) {
            chunked.push(temp);
          }
        return chunked;
  }

  const chunks = nums.chunk(3);
 // console.log(chunks);

  const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 },
    { name: "Carol", age: 30 },
    { name: "Dave", age: 20 }
  ];
 
  Array.prototype.groupBy=function(args){
    let obj={};
    let ages=[];
    this.forEach((th)=>{
          if(!ages.includes(th.age)){
                ages.push(th.age);
            }
            
    })
    ages.forEach((ag)=>{
        
        obj[ag]=this.filter((th)=>th.age===ag);
        
    })
 
  return(obj);
  }

  const groupedd = users.groupBy(user => user.age);
  //console.log(groupedd);

  const inputObj = {
    a: 1,
    b: "hello",
    c: 3,
    d: function age(){
        console.log("hello");
    },
    e: function name(){
        console.log("hello");
    },
    f: null
  };

  function objFilter(obj){
    let newObj={};
    for(key in obj){
        if(typeof(obj[key])==="number"){
            newObj[key]=obj[key];
        }
    }
    return newObj;
  }
  function objFunction(obj){
    let count=0;
    for(key in obj){
        if(typeof(obj[key])==="function"){
            count++;
        }
    }
    return count;
  }
console.log(objFunction(inputObj));


function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        func.apply(this, args);
      }
    };
  }

  const fetchData = () => {
    console.log("Fetching data...");
    // API call logic here
  };
  
  const throttledFetchData = throttle(fetchData, 2000);
  
  // Attach to an event, e.g., scroll
  window.addEventListener("scroll", throttledFetchData);

