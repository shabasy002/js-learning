let glassList=document.querySelector('.glass-wrapper');
let jarList=document.querySelector('#jar').children;

let tempArray=Array.from(jarList).reverse();




glassList.addEventListener("click", function(event){
  
 if(event.target.classList.contains("glass")){
  let upTothis=(event.target.getAttribute('data-index'));
  let childDivs= glassList.children;
  for(let i=0;i<=childDivs.length-1;i++){
    if(childDivs[i].getAttribute('data-index')>upTothis){
      childDivs[i].classList.remove("blue");
      tempArray[i].classList.remove("blue");
    }else{
      childDivs[i].classList.add("blue");
      tempArray[i].classList.add("blue");
    }
  }
      
 }
});

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
      console.log(`Hello, my name is ${this.name}`);
    };
  }
  isAdult() {
    return this.age > 17;
  }
}

  let Ajay= new person("ajay", 19);
  console.log(Ajay.isAdult());


  function Book(title, author){
    this.title=title;
    this.author=author;
  }

  Book.prototype.summary=function(){
    console.log(`${this.title} by ${this.author}`)
  }

 let Maths= new Book("Maths", "Rob");
 console.log(Maths.summary());

 Array.prototype.getLast=function(){
  let len=this.length;
  return this[len-1];
 }

 let Arr=[1,2,2,6,7];
 console.log(Arr.getLast());

 Function.prototype.myBind=function(){
  
 }

 function car(name, year, model){
  this.name=name;
  this.year=year;
  this.model=model;
  
 }

 car.prototype.drive=function(){
  console.log(`My car is ${this.name}, ${this.model}`);
 }

 let Audi=new car("Audi", 2010, "cx");
 let Benz=new car("Benz", 2020, "c-class");

//  console.log(Audi.drive());
//  console.log(Benz.drive());



class Student{
  constructor (name, marks){
    this.name=name;
    this.marks=marks;
    
  }
}

Student.prototype.hasPassed=function(minMarks){
  return(this.marks >= minMarks);
}

let Mystudent=new Student("Ajay", 501);
//console.log(Mystudent.hasPassed(499));

class User{
  constructor(name){
    this.name=name;
  }
}

User.prototype.setName=function(newName){
  if (!(this instanceof User)) {
    throw new Error("setName must be called on a User instance");
  }
  this.name = newName;
  return this;
}

let newAdmin=new User("Ajay");
console.log(newAdmin.setName("Vimal"));

// let superAdmin={};
// console.log(superAdmin.setName("john"))

Array.prototype.myMap=function(){
  return(this);
}

console.log(Arr.myMap());

const nums = [1, 2, 3, 4];
const evenNum=[2, 4, 6];
const oddNum=[1, 3, 5, 6];

let squared=nums.map(n=>n*2);
console.log(squared);

let sum=nums.reduce((a,i)=>a+i);
console.log(sum);

const users = [
  { name: "Jon", role: "admin" },
  { name: "Arya", role: "user" },
  { name: "Bran", role: "admin" },
  { name: "Sansa", role: "user" }
];

let names=users.map(u=>u.name);
console.log(names);

let findfour=nums.find(n=>(n<4));
let fil=nums.filter(n=>n%2===0);
console.log(findfour);

checkeven=evenNum.every(ev=>ev%2===0);
console.log(checkeven);
checkOdd=oddNum.some(od=>od%2>0);
console.log(checkOdd);

const sentence = "Mid-level developers rock";
 let sentArra=sentence.split(" ").reverse().join(" ");
 console.log(sentArra);

 const items = ['apple', 'banana', 'apple', 'orange', 'banana'];

 const count = items.reduce((acc, item) => {
   acc[item] = (acc[item] || 0) + 1;
   return acc;
 }, {});
 
 console.log(count);

 let roles=users.map(u=>u.role);
 roles=new Set([...roles]);
 usernames=users.map(u=>u.name);
 console.log(roles);

 const posts = [
  { title: "Post 1", tags: ["react", "js"] },
  { title: "Post 2", tags: ["angular", "js"] },
  { title: "Post 3", tags: ["react", "html"] },
];

let tags=posts.map(post=>post.tags);
let emptyArr=new Array;
for(i=0;i<tags.length;i++){
 emptyArr =  emptyArr.concat(tags[i]);
}

emptyArr=new Set([...emptyArr]);
console.log(emptyArr);

const products = [
  { name: "Phone", price: 700, inStock: true },
  { name: "Laptop", price: 1500, inStock: false },
  { name: "Tablet", price: 400, inStock: true }
];

let priceList=products.map(p=>p.price);
let maxPrice=Math.max(...priceList);
let findName=products.find(p=>p.price===maxPrice);
console.log(findName);

const people = [
  { name: "Jon", age: 30 },
  { name: "Arya", age: 22 },
  { name: "Sansa", age: 28 }
];

let sorted=people.sort((a,b)=>a.age-b.age);
console.log(sorted);

let inStock=products.filter(p=>p.inStock===true).sort((a,b)=>a.price-b.price);

console.log(inStock);

const cart = [
  { item: "Phone", price: 700, quantity: 2 },
  { item: "Tablet", price: 400, quantity: 1 }
];

let Amount=cart.map(c=>c.price*c.quantity).reduce((a, c)=> a+c);

console.log(Amount);

const userS = [
  { name: "Jon", active: true },
  { name: "Arya", active: false },
  { name: "Bran", active: true }
];

let filterUser=userS.filter(u=>u.active===true).map(u=>u.name).join(",");
console.log(filterUser);

const namesList = ["Jon", "Arya", "Robb", "Sansa", "Bran"];

let short=namesList.filter(n=>n.length<4);
let long=namesList.filter(n=>n.length>4);
console.log(short, long);


let filterName=namesList.filter(n=>{
  for(let i=0;i<=n.length-1;i++){
    if(n[i]==='a'){
      return n;
    }
  }
});

console.log(filterName);

const numbers = [2, -1, 5, -7, 3];

let positiveNum=numbers.map(n=> {
  if(n<0){
    return 0;
  }else{
    return n;
  }
});
console.log(positiveNum);

const developers = [
  { name: "Jon", skills: ["React", "Node"] },
  { name: "Arya", skills: ["Vue", "Node"] },
  { name: "Sansa", skills: ["Angular", "React"] }
];

let filtered=new Array;
let skills=developers.map(d=>{
  filtered=filtered.concat(d.skills);
});
filtered=new Set([...filtered])
console.log(filtered);

const values = [2, 3, 5, 4, 6, 7, 1, 2, 3];
const sentences = "the quick brown fox jumps over the lazy dog the fox";
let sentObject={};
let sentArray=sentences.split(" ");

sentArray.forEach(sent=>{
  
  if(sentObject.hasOwnProperty(sent)){
    
    sentObject[sent]+=1;
  }else{
    sentObject[sent]=1;
  }
  
 
})

console.log(sentObject);

const input = "programming";
let inputSentence=Array.from(input);
let refined=new Set([...inputSentence]);
refined=Array.from(refined);
console.log(refined.join(""));

let res=[];
let newArr=[];
inputSentence.forEach(inp=>{
  if(!(res.includes(inp)) ){
    res.push(inp);
  }else{
    newArr.push(inp);
  }
})

console.log(newArr);

const str1 = "listen";
const str2 = "silent";

let strone=Array.from(str1);
let strtwo=Array.from(str2);
let result=true;
if(strtwo.length===strone.length){
  for(let i=0; i<=strtwo.length-1;i++){
    if(strtwo.includes(strone[i])){

    }else{
      result=false;
    }
  }
}

console.log(result);

const inputWord = "JavaScript is Awesome!";
const target = "s";

function checker (word, t){
  let wordArray=word.toLowerCase().split(" ");
  let count=0;
  wordArray.forEach((w)=>{
    if(w.includes(t)){
      count++;
    }
  })
  return count;
}
 console.log(checker(inputWord, target));

 const inputSmall = "front end developer";
 let smallArray=inputSmall.split(" ").map((sm)=>sm[0].toUpperCase()+sm.slice(1)).join(" ");
 console.log(smallArray);

 const toCompress = "aaabbc";

 let compObject={};

 for(let char of toCompress){
  let count=0;
  if(compObject.hasOwnProperty(char)){
    compObject[char]+=1;
  }else{
    compObject[char]=1;
  }
 }

 console.log(JSON.stringify(compObject));

 const obj = { a: 1 };
console.log(obj.toString());

function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  return `Hi, I'm ${this.name}`;
};

const p = new Person("Alex");
console.log(p.sayHi());

Array.prototype.last=function(){
  
  let length=this.length;
  if(length>0){
    return (this[length-1]);
  }else{
    
  }
  
}


let numArray=[23, 34, 56, 78, 89];
let letArray=[25, 35, 55, 75, 85];

console.log(numArray.last());

function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.details=function(){
 return(`make of the car is ${this.make}`)
}

let Ford=new Car("suv", 1988);
console.log(Ford.details());

function isPrototypeOf(obj1, obj2){
  if(obj.__proto__ === obj2.prototype){
    return true;
  }
}

Array.prototype.myMap=function(callback){

  const result = [];
  for(let i=0;i<=this.length-1;i++){
    result.push(callback(this[i], i, this));
  }
  return result;
}

let my= numArray.myMap(function(num){
  return num*num;
});

console.log(my);

Array.prototype.myFilter=function(callback){
  const result=[];
  for(let i=0;i<=this.length-1;i++){
    if(callback(this[i])){
      result.push((this[i]))
    }
    
  }
  return result;
}

let filt=numArray.myFilter(function(num){
    return num>60;
})


console.log(filt);

Array.prototype.myEvery=function(callback){
  const result=true;
  for(let i=0;i<=this.length-1;i++){
    if (callback(this[i])===false){
     return false;
    }
  }
  return result;
}

Array.prototype.mySome=function(callback){
 
  for(let i=0;i<=this.length-1;i++){
    if (callback(this[i])===true){
     return true;
    }
  }
  return false;
}

Array.prototype.myConcat=function(...args){
  const result=args[0];
  for(let i=0; i<args.length;i++){
    if(args[i].length>0){
        for(let j=0;j<args[i].length;j++){
          if(i>0){
            result.push(args[i][j]);
          }
        }
    }else{
      result.push(args[i]);
    }
  }
  return(result);
}

Array.prototype.myFill=function(...args){
  const len=args.length;
  const result=[];
  if(len===1){
    for(let i=0;i<this.length;i++){
      result.push(args[0]);
    }
    
  }
  else if(len===2){
    for(let i=0; i<=this.length;i++){
       if(i>=args[1]){
        result.push(args[0]);
       }else{
        result.push(this[i]);
       }
    }
  }else{
    for(let i=0; i<=this.length-1;i++){
      if(i>=args[1] && i<=args[2]){
       result.push(args[0]);
      }else{
       result.push(this[i]);
      }
   }
  }
  return result;
}
let myE=numArray.myEvery(function(num){
  return num<80;
});
let myS=numArray.mySome(function(num){
  return num===89;
});
let myCn=numArray.myConcat([1, 2], 3);
let myF=numArray.myFill("a", 1, 4);
console.log(myF);

let myRd=numArray.reduce((a, c)=>a+c);

console.log(myRd);

const persons = {
  name: "Alex",
  greet: function () {
    return `Hi, I'm ${this.name}`;
  },
};

const greetFunc = persons.greet.bind(persons);
console.log(greetFunc());

function say(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}



const emp1 = {
  name: "Alice",
  showInfo() {
    return(`Name: ${this.name}`);
  }
};

const emp2 = {
  name: "Bob"
};

//let empName=emp1.call(emp2.showInfo);
console.log(emp1.showInfo.call(emp2));

function Sum(a, b, c) {
  return a + b + c;
}

const Numbers = [10, 20, 30];

let resUm=Sum.apply(null, [...Numbers]);
console.log(resUm);

function describePerson(city, profession) {
  console.log(`${this.name} is a ${profession} living in ${city}`);
}

const techie = { name: "Ravi" };

let describe=describePerson.call(techie, "kochi", "designer");

console.log(describe);

function calculateTax(rate, amount) {
  return rate * amount;
}

let tax=calculateTax.bind(50, 50);

console.log(tax(40));

const Carr = {
  brand: "Toyota",
  start() {
    return(`Starting ${this.brand}`);
  },
};

console.log(Carr.start());

const uSer = {
  name: "Shabasy",
  intro() {
    return `Hello, I'm ${this.name}`;
  }
};

const guest = { name: "Ajay" };

console.log(uSer.intro.call(guest));
// Use call to invoke intro for guest





function createCounter(){
  let count=0;
 
 function counter(){
     count++
     console.log(count);
  }
  return counter;
 }
 
 let createCount=createCounter();
 console.log(createCount());
 

 function scoreTracker(){
  let score=1000;
  let scoreObj={};

  return {
    increaseScore(){
      return ++score;
    },
    decreaseScore(){
      return --score;
    },
    getScore(){
      return score;
    }
  };
 }

 const player = scoreTracker();
 
 function passwordLock(correctPassword){
  let password=correctPassword;
  return function checker(input){
    return input === correctPassword;
  }
 }

const unlock = passwordLock("abc123");
console.log(unlock("guess"));    // false
console.log(unlock("abc123"));   // true


function limit(fn, n){
  let count=0;
    return function(...args){
      if (count < n) {
        count++;
        return fn.apply(this, args);
      } else {
        return console.log("Limit reached");
      }
    };
  
}

const limitedLog = limit(() => console.log("Hi"), 2);
limitedLog(); // Hi
limitedLog(); // Hi
limitedLog(); // Limit reached

function onlyOnce(fn){
  let count=0;

  return function(...args){
    if(count<1){
      count++
      return fn.apply(this, args);
    }else{
      return console.log("you cant do more than once");
    }
  };
}

const logOnce = onlyOnce(() => console.log("Hello!"));
logOnce(); // "Hello!"
logOnce(); // nothing

function stepCounter(start, step){
  let result=start;
  return function(){
   result=result+step;
   return result;
  };

}
const steps = stepCounter(56, 11);
console.log(steps());
console.log(steps());
console.log(steps());

function secure(secret, password) {
  
  // let getSecretObj={};
  // getSecretObj.password=secret;
return{
  getSecret(key){
    
    if(key===password){
      return (secret);
    }else{
      return "Access Denied";
    }
  }
};
}

const locker = secure("Top Secret", "1234");
console.log(locker.getSecret("1234"));

function createPoll(question) {
 let count=0;
 
 return {
  vote(){
    count++;
    return count;
 },
 getResults(){
  return (`${question} = ${count}`);
 }
 } 
}

const poll = createPoll("Do you like JavaScript?");
console.log(poll.vote()); // 1
console.log(poll.vote()); // 1
console.log(poll.getResults()); // "Total votes for: Do you like JavaScript? = 2"

function createCartItem(productName){
  let count=0;

  return {
    add(){
      count++;
      
    },
    remove(){
      count--;
      
    },
    getQuantity(){
     return count;
      
    }

  };
}

const milk = createCartItem("Milk");
milk.add();
milk.add();
milk.add();
milk.remove();
console.log(milk.getQuantity()); // 2

function createQuestion(questionText) {
 let count=0;

 return function(answer){
  if(count===0 && (answer==="Function with scope")){
    count++;
    return "Answer accepted";
  }else{
    
    return "Already attempted";
  }
  
 };

}

const q1 = createQuestion("What is closure?");
console.log(q1("Function with scope")); // Answer accepted
console.log(q1("Another try"));


function createTabTracker(){
  let count=0;
  let switchObject={};
  
  return function(tabName){
    //switchObject[tabName]=count;
   if(switchObject.hasOwnProperty(tabName)){
    switchObject[tabName]++;
   }else{
    switchObject[tabName]=1;
   }
   return (`Switched to ${tabName} (${switchObject[tabName]})`);
  };
}


const trackTab = createTabTracker();
//console.log(trackTab("Home"));      // Switched to Home (1)
console.log(trackTab("About"));     // Switched to About (1)
console.log(trackTab("Home"));     
console.log(trackTab("About")); 
console.log(trackTab("About")); 
console.log(trackTab("About")); 
console.log(trackTab("Home")); 

function createLimitedApi(fn){
  let count=0;
  //console.log(fn);
  return function(){
   if(count<fn){
    count++;
    return `called ${count} times`;
   }else{
   return("limit reached");
   }
 
  };
}
const api = createLimitedApi(2);
console.log(api()); // Call 1
console.log(api()); // Call 2
console.log(api());  // Call 3
console.log(api());  // "Rate limit exceeded"

function createUserNotifier(){
  let userObject={};

  return function(name){
      if(userObject[name]){
        return("nothing");
      }else{
        userObject[name]=name;
        return (`welcome ${name}`);
      }
  };
}

const notify = createUserNotifier();
console.log(notify("Arun")); // Welcome Arun!
console.log(notify("Arun")); // (nothing)
console.log(notify("Akhil")); // Welcome Priya!
console.log(notify("Arun"));// (nothing)
console.log(notify("Priya")); // Welcome Priya!
console.log(notify("Priya")); // nothing

function createEditor(){
 let textArray=[ ];

 return{
    write(text){
      textArray.push(text);
      //textArray=textArray.slice(-);
      return textArray.toString();
    },
    undo(){
      textArray=textArray.slice(0, textArray.length-1);
      return textArray.toString();
    }

    
 };
}

const editor = createEditor();
console.log(editor.write("Hello"));
console.log(editor.write("Hello World"));
console.log(editor.write("Hello World ! How are you"));
console.log(editor.undo()); // Hello

function accessControl(role){
    
  return function(fn){
      if(role==="admin"){
        return true;
      }else if(role==="user"){
         if(fn==="delete"){
          return false;
         }else{
          return true;
         }
      }else{
        return 'no such roles';
      }
    };
}

const adminAccess = accessControl("admin");
console.log(adminAccess("delete")); // true
console.log(adminAccess("read"));   // true

const userAccess = accessControl("user");
console.log(userAccess("read")); // true
console.log(userAccess("delete")); // false


function eventTracker(e){

  let eventObject={};
  console.log(e);
  return function(fn){
    if(eventObject[e]){
      eventObject[e]++
    }else{
      eventObject[e]=1;
    }

    return (`${e} count ${eventObject[e]}  `);
  };
}

const trackClick = eventTracker("click");
console.log(trackClick()); // "click count: 1"
console.log(trackClick()); // "click count: 2"
console.log(trackClick()); // "click count: 2"
const trackView = eventTracker("view");
console.log(trackView()); // "view count: 1"


function useEffectOnce(callback) {
  let count=0;
  return function(){
      if(count<1){
        count++;
        return callback();
      }
  };
 
}

const effect = useEffectOnce(() => console.log("Run once!"));
console.log(effect()); // "Run once!"
console.log(effect());  // nothing

let numArrays=[10, 15, 34, 56];

function x(){
  var a = 10;
  function y(){
    console.log(a);
  }
  a = 100;
  return y;
}
var z = x();
console.log(z);
z();

function createBase(base){

  return function(num){
   return(console.log(num+base));
  }
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

// Can you write a function that takes a string as an input and returns a closure that 
// returns the input string uppercase? However, if the closure is called with an argument, 
// it should return the argument uppercase instead.

function createUpperCaser(str) {
  return function upperCase(arg) {
    if (arg === undefined) {
      return str.toUpperCase();
    } else {
      return arg.toUpperCase();
    }
  };
}

const upperCaseHello = createUpperCaser('hello');
console.log(upperCaseHello()); // logs "HELLO"
console.log(upperCaseHello('world')); // logs "WORLD"

var func = [];
for (var i = 0; i < 5; i++) {
  func[i] = function() {
    console.log(i);
  };
}
func[3]();


//const minLength = min => value => value.length >= min;
function minLength(min){
  return function(value){
    return(value.length >= min);
  }
}
const min5 = minLength(5);

console.log(min5("hello")); // true
console.log(min5("hi"));    // false

function createLogger(i){
 return function(){

 }
}




function calculateTotalPrice(price, tax, discount) {
  return price + (price * tax) - discount;
}


function currycalculateTotalPrice(price){
    return function (tax){
      return function(discount){
        return price + (price * tax) - discount;
      }
    }
}

console.log(currycalculateTotalPrice(10)(5)(1));

function currySum(a){
  let sum=a;
  function inner(b) {
    if (b === undefined){
      return sum;
    } else{
      sum += b;
    }
   
    return inner;
  }

  return inner;
  
  
}

console.log(currySum(2)(4)(6)(8)(10)());


function calculateAreaCurried (length) {
  
    return function(width){
      return function(unit){
        return `${length * width} ${unit}`;
      }
    }
  
}

const area = calculateAreaCurried(10)(5)("sqft");
console.log(area); 


function createLogger(error){
 
    return function(modules){
      return function(logger){
        return `[${error}] [${modules}]: ${logger}`;

      }
    
  }
}

const errorLogger = createLogger("ERROR")("AuthModule");
console.log(errorLogger("Invalid password"));

function minLength(len){
 return function(str){
  return str.length >= len;
 }
}
const isMin5 = minLength(5);
console.log(isMin5("hello")); // true
console.log(isMin5("hi")); 


function createInput(el){
  return function(name){
    return function(placeholder){
      
        let element=document.createElement("input");
        element.setAttribute("name", name);
        element.setAttribute("type", el);
        element.setAttribute("placeholder", placeholder);
        return element;
      
    }
  }
}
const inputBuilder = createInput("text")("username")("Username");
console.log(inputBuilder);
// Output: <input type="text" name="username" placeholder="Username" />



function createRequest(method){
  return function(url){
    return function(auth){
      return `method:${method} url:${url} auth:${auth.auth}`;
    }
  }
}
const getUsers = createRequest("GET")("/api/users")({ auth: true });
console.log(getUsers);


function multiplyBy(preVal){
  return function(val){
    return preVal*val;
  }
}
const double = multiplyBy(2);
console.log(double(5)); // 10



function curry (fn){
  return function(){
      return console.length(fn.length);
  }
}




function summm(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(summm);

console.log(curriedSum(1)(2)(3));