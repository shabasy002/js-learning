let smileys=document.getElementById("smileys");
let feedback;
smileys.addEventListener("click", function(e){
   (Array.from(e.currentTarget.children)).forEach(element => {
       if(element!==e.target){
         element.classList.remove("current");
       }
   });
    feedback=(e.target.dataset.feedback);
    e.target.classList.add("current");
});
document.getElementById("submit").addEventListener("click", function(e){
    if(feedback){
        console.log(feedback);
        document.querySelector(".feedback").classList.add("hide");
        document.querySelector(".result").classList.remove("hide");
        document.querySelector(".result h3").innerHTML=feedback+"!";
        document.querySelector(".result a").classList.add(feedback);
    }
})
document.querySelector(".result").addEventListener("click", function(e){
   if(e.target.classList.contains("back-arrow")){
    document.querySelector(".result").classList.add("hide");
    document.querySelector(".feedback").classList.remove("hide");
    
   }
})

let arr=[1, 2, 3, 2, 4, 3, 5, 1];

function removeDuplicate(args){
  let result=[];
  for(let i=0; i < args.length-1;i++){
    if(result.includes(args[i])){
    }else{
      result.push(args[i]);
    }
  }
  return result;
}

function isPalindrome(str) {
    console.log(str.length);
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const nested = [1, [2, [3, [4, [5]]]], 6];

function flattenArray(arg){
    let result=[];
    if(Array.isArray(arg)){
        for(let i=0;i<=arg.length-1;i++){
            if(Array.isArray(arg[i])){
                 result = result.concat(flattenArray(arg[i]));
            }else{
                result.push(arg[i]);
            }
        }
    }
    return result;
}

function sumDigits(num) {
  if (num === 0)  {
    return 0;
  }else{
     return (num % 10) + sumDigits(Math.floor(num / 10)); // recursive case
  }
 
}

console.log(sumDigits(1234));

function raisePower(x, y){
    let result=x;
    if(y===0){
        return 1;
    }else{
        result=x * raisePower(x, y-1)
    }

    return result;
}

console.log(raisePower(3, 4));


function countChar(word, letter){
   
   if (word.length === 0) return 0; // base case
    let count= word[0] === letter ? 1 : 0;
    count=count+countChar(word.slice(1), letter)
    

    return count;
}
console.log(countChar("hello world", "l"));

countChar("hello world", "l"); // 3