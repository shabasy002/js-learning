let inner=document.getElementsByClassName("inner");
let getStyle=getComputedStyle(inner[0]);
//inner[0].setAttribute("style", `margin-left: ${margin + 25}%;`);
let margin = 0;
const interval = setInterval(() => {
    if (margin >= 100) {
       margin=-25;
    }
    margin += 25;
    inner[0].style.marginLeft = margin + "%"; 
},700); 



const dropdown = document.querySelector('.dropdown');
const toggle = dropdown.querySelector('.dropdown-toggle');
const menu = dropdown.querySelector('.dropdown-menu');

// Toggle dropdown on button click
toggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Handle click on dropdown items using event bubbling
menu.addEventListener('click', function (event) {
  const item = event.target;
  if (item.tagName === 'LI') {
    const selectedValue = item.dataset.value;
    toggle.textContent = item.textContent; // update button text
    menu.classList.add('hidden'); // close menu
    console.log('Selected value:', selectedValue);
  }
});

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
  if (!dropdown.contains(event.target)) {
    menu.classList.add('hidden');
  }
});




let arr=[10, 15, 20, 45, 56, 67];

Array.prototype.mySome=function(){

    for(i=0;i<=this.length-1;i++){
        if(this[i]>17){
            return true;
        }
    }

}

class createObject {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;

        this.getFullname=function () {
            return(this.fname+' '+this.lname);
        }
    }
}

let person=new createObject("John", "methew");
console.log(person.getFullname.call(person));
//console.log(arr.mySome());

const newArr = [10, 7, 11, 5, 4];

function findMin(arr) {
  arr = arr.sort((a, b) => a - b);
  return arr[0];
}

console.log(findMin.apply(null, [newArr])); // Output: 4

function sum(a,b){
    return a+b;
}

let a=5;
let b=10;

let value=sum.call(null, a, b);
console.log(value);

function con(a, b){

return (a.concat(b));
}

let a1=[1, 2];
let b1=[3, 4];

console.log(con.apply( null, [a1, b1]));

function toUpper(str){
  return (String.prototype.toUpperCase.call(str));
}

console.log(toUpper("hello"));

function sumOfarray(arr){
    
    return (Array.prototype.reduce.apply(arr, [(a, i) => a + i]));
}

console.log(sumOfarray(newArr));

function greet(name){
    let result = name + ' '+ "hello";
    return result;
}

console.log(greet.apply (null, ["alice"]));


const myObject={
    name:"shabasy"
}
function sayHello(){
    return "Hello";
}

console.log(sayHello.call(myObject));

function multiply(a, b){
    return(a*b);
}

const double=multiply.bind(null, 2);

console.log(double(5));

function square(num){
    return (num*num);
}

const squareArray=[4, 5, 6, 9].map((a)=>square(a));
console.log(squareArray);


const user1={
   introduce:function(name, age){
    console.log(`My name is ${name} and I am  ${age} years old.`)
   }
}

const user2={
    name:"shabasy",
    age:"36"
}

console.log(user1.introduce.call(null, user2.name, user2.age));

function Person(name){
  this.name=name;
}
function Employee(name, position){
    Person.call(this, name); // Borrow
    this.position=position;
  }

  let Ajay=new Person("ajay");
  let Officer=new Employee( Person.call(this, name), "ceo");

 
  console.log(Ajay);
  console.log(Officer);

  function describeCar(model, brand, year){
    console.log(`This is a ${this.brand} ${this.model} from ${this.year} `)
  }

  const Maruti={
    model:"Ertiga",
    brand:"Maruti",
    year:2010

  }

  console.log(describeCar.call(Maruti));

  function greet(language, name){
   
    console.log(this.language==="en" ? `"Hello, ${this.name}!"` : `"Hola, ${this.name}!"`);
  }

  const girl={
    name:"Alice",
    language:"en",
  }

  const girl2={
    name:"Alice",
    language:"es",
  }

  greetInenglish=greet.bind(girl);
  greetInSpanish=greet.bind(girl2);
  greetInenglish();
  greetInSpanish();

  const calculator = {
        multiply(a, b){
            return (a*b);
        }
  }

  const Double=calculator.multiply.bind(null, 2);

  console.log(Double(60));

  const EmployeeNew={
    name:"Alice",
    position:"Teacher",
    showInfo(){
        console.log(`Name is ${this.name} position is ${this.position}`)
    }
  }

  let SampleVar=EmployeeNew.showInfo.bind(EmployeeNew);
  SampleVar();

  const obj = {
    name: 'Arya',
    greet: function () {
      console.log(this.name);
    }
  };
  const greetFn = obj.greet;
  greetFn(); // ???
  obj.greet();


  let divwrap=document.getElementsByClassName("button-wrap");
  let btn=document.getElementsByClassName("btn");

  divwrap[0].addEventListener("click", function(event){
    console.log(event.target);
    console.log(this.classList.toggle("wrap"));
  });

  btn[0].addEventListener("click", function(event){
    console.log(event.target);
    console.log(this.classList.toggle("wrap"));
    event.stopImmediatePropagation();
  });

  btn[0].addEventListener("click", function(event){
  alert("hello");
  });

  let parent=document.getElementsByClassName("wrap");

  parent[0].addEventListener("click", function(event){
   console.log(event.currentTarget.classList);
    if(event.target.classList.contains("1")){
      console.log("one");
    }else{
      console.log("2");
    }
    
  })

  const person1 = {
    name: "Alex",
    greet: function () {
      setTimeout(function () {
        console.log(`Hello,  ${this.name}`);
      }, 1000);
    }
  };
  
  person1.greet.bind(null, person1.name);

  const nums = [1, 2, 3];

const res = nums.map(num => num * 2);
console.log(res); // ?

const res2 = nums.forEach(num => num * 2);
console.log(res2); // ?



 function buttonGenerator(){
  let buttonWrap=document.getElementsByClassName("new-button");
let n=5;

for(let i=0;i<=n-1;i++){
  console.log(document.createElement('button'));
  buttonWrap[0].append(document.createElement('button'))
  
}

let tempArr=buttonWrap[0].children;

console.log(tempArr);
for(let i=0;i<=n-1;i++){
  tempArr[i].innerHTML="Button"
  tempArr[i].addEventListener("click", function(event){
      alert(`Button ${i+1}`);
  });
 }
 }

 buttonGenerator();
 const user = {
  name: "John",
  sayHello: function () {
    console.log("Hi, I'm " + this.name);
  }
};

const greet22 = user.sayHello.bind(user);
greet22(); // What will this log? How can you fix it?

// function Person22(name) {
//   this.name = name;
//   setTimeout(function () {
    
//     console.log("Hello " + this.name);

//   }.bind(this), 1000);
// }

// new Person22("Emma");

const book = {
  title: "JS Deep Dive",
  printTitle: function () {
    console.log("Book: " + this.title);
  }
};

const print = book.printTitle.bind(book);
print(); // How to fix using bind?


const handler = {
  message: "Button clicked!",
  handleClick: function () {
    alert(this.message);
  }
};

const btn22 = document.createElement("button");
btn22.innerText = "Click Me";
document.body.appendChild(btn22);
btn22.addEventListener("click", handler.handleClick.bind(handler))

const team = {
  name: "Dev Squad",
  members: ["Alex", "Ben", "Cathy"],
  
  showTeam: function () {
    this.members.forEach(function(member) {
      console.log(`${member} is in ${this.name}`);
    }.bind(this));
  }
};

team.showTeam(); // Fix to print: "Alex is in Dev Squad", etc.

const user33 = {
  name: "Lara",
  getName: function () {
    return this.name;
  }
};

function printName(fn) {
  console.log(fn()); // What gets logged?
}

printName(user33.getName.bind(user33)); // Fix it so it logs "Lara"

const calculator33 = {
  number: 10,
  double:function() {
    return this.number * 2;
  }
};

console.log(calculator33.double()); // What's the output? Why?

const hero = {
  name: "Ironman",
  powers: ["flight", "missiles"],
  showPowers: function () {
    this.powers.forEach(function(power) {
      console.log(`${this.name} has ${power}`);
    }.bind(this));
  }
};

hero.showPowers(); // How to fix?

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak =() =>
    console.log(`${this.name} makes a sound`);
  
}

const dog = new Animal("Dog");
setTimeout(dog.speak, 1000); // What's wrong? How do you fix it?