<script >
   import {createEventDispatcher, onDestroy, onMount} from 'svelte';
   
   const dispatch=createEventDispatcher();
  
   let value='';
   // Function to handle input changes
  function handleInput(event) {
    value = event.target.value;
    // Dispatch a custom event named 'inputChange' with the new value
    dispatch('inputChange', { value });
  }
  let intervalId ;
  onMount(() => {
    console.log('Component is mounted');
     intervalId = setInterval(() => {
     // console.log('Interval running');
    }, 1000);
    fetchData();
  });
  onDestroy(() => {
    
    clearInterval(intervalId);
   // console.log('Component is destroyed');
  });
  function fetchData() {
    console.log('Component is mounted from fetch data');
  }
  
</script>

<input type="text" value={value} on:input={handleInput} placeholder="type something..."/>