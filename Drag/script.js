let container=document.querySelectorAll(".box");
console.log(container);
container.forEach(function (item){
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
 item.addEventListener('drop', handleDrop);
});
function handleDragStart(e){
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}
function handleDragEnd(e){
    this.style.opacity="1";
    container.forEach(function (item) {
        item.classList.remove('over');
      });
}
function handleDragOver(e) {
    e.preventDefault();
    return false;
  }
  function handleDragEnter(e) {
    this.classList.add('over');
  }
  function handleDragLeave(e) {
    this.classList.remove('over');
  }
  function handleDrop(e) {
    e.stopPropagation();
  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
  }

myArr=["cat", "dog", "ant", "bird"];
myNum=[18, 26, 34, 76];
const beasts = ["ant", "bison", "camel", "duck", "bison"];

Array.prototype.myIncludes=function(el){
    if(this.length>0){
        for(let i=0;i<this.length;i++){
        if(this[i]===el){
            return true;
        }
        }
        
    }
  
    return false;
}
Array.prototype.MyIndex=function(el){
    for(let i=0;i<this.length;i++){
        
        if(this[i]===el){
            return i;
        }
    }
    return -1;
}

Array.prototype.MyJoin=function(el, operator){
    let newString=""
    for(let i=0;i<this.length;i++){
        if(i!=this.length-1){
            newString += this[i]+operator;
        }else{
            newString += this[i];
        }
        
    }
    return newString;
}

Array.prototype.MyReverse=function(){
  if(this.length>1){
       let newArray=[];
        for (let i = this.length - 1; i >= 0; i--) {
                newArray.push(this[i]);
        }
return newArray;
   }

}

Array.prototype.MyUnshift=function(...el){
  let n= el.length;
  this.length=this.length+n;
  
for (let i = this.length - 1; i >= n; i--) {
  this[i] = this[i - n]; // shift each element one step right
  }
  for (let i=0;i<el.length;i++) {
      this[i]=el[i];
  }
  return this;
}

console.log(beasts.MyUnshift("cat", "cow", "dog"));
console.log(beasts.MyReverse());
console.log(beasts.MyJoin("cat", " "));
console.log(beasts.MyIndex("cat"));
console.log(myArr.myIncludes("cow"));