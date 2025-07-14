
<script>
  import buttonAttrs from "./button.svelte";
  import Custominput from "./custominput.svelte";
  //import { buttonAttrs } from './buttonAttrs.js'; // Import from the JS file
  import { page } from '$app/stores';

let slug = $page.params.slug;
console.log(slug);
  console.log(buttonAttrs);
    let vehicle="";
    let flipped = false;
    let list=new Array();
    let errorMessage='';
    function handleSubmit(){
        if(vehicle!=''){
            if(list.includes(vehicle)){
                errorMessage="already exist";
        }else{
            list.push(vehicle);
            list=list;
        }
        }else{
            errorMessage="please enter some thing";
        }
        
        
    }
    function handleCaptureClick(event) {
    console.log('Capture phase click event');
  }

  function handleBubbleClick() {
    console.log('Bubble phase click event');
  }
   // Local state to hold the input value from the child
   let inputValue = '';

// Function to handle the custom event from the child
  function handleInputChange(event) {
    inputValue = event.detail.value;
    console.log(inputValue);
  }
</script>
<div class="text-column">
    <ul>
        {#each list as li}
           <li>{li}</li>
        {/each}
        
    </ul>
</div>

<form on:submit|preventDefault={handleSubmit}>
    <label for ="vehicles">Vehicles</label>
    <input type="text" name="vehicle"  bind:value={vehicle} />
    <div>
        {#if errorMessage}
        <p class="error">{errorMessage}</p>
     {/if}
     <Custominput on:inputChange={handleInputChange} />
     <button {...buttonAttrs}>Submit</button>
    
    </div>
 
   
</form>
<div on:click|capture={handleCaptureClick} style="padding: 20px; background: lightblue;">
    Click me (Capture phase)
    <button on:click={handleBubbleClick} style="margin-top: 10px;">
      Button (Bubble phase)
    </button>
  </div>
<div >
    <p>hello</p>
    <button class="xyz" > click me</button>
</div>


