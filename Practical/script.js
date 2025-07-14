let box=document.getElementById("box");
function addFade(el){
    console.log(el);
       setTimeout(() => {
        el.remove();
       }, 2000);
}
box.addEventListener("click", function(e){
   box.innerHTML="<span class='dot' id='dot'></span>";
   let dot=document.getElementById("dot");
  dot.setAttribute( "style", `left:${e.offsetX-15}px;top:${e.offsetY-15}px;`);
  addFade(dot);
   
});