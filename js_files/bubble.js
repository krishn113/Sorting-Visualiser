async function bubble() {
    const special = document.getElementsByClassName("bars");
    for (let i = 0; i < special.length - 1 ; i++) {
      for(let j = 0 ; j < special.length - i -1  ; j++){
       
            if(parseInt(special[j].style.height) > parseInt(special[j+1].style.height)){
              special[j].style.background="#EE9595";
              special[j+1].style.background="#EE9595";
              await new wait(delay);
                swap(special[j],special[j+1]);
            }
            special[j].style.background="#267fc5";
            special[j+1].style.background = "#267fc5";
        } 
        
        special[special.length-1-i].style.background = '#74c7b8';
      }    
      special[0].style.background = "#74c7b8";
  }
  document.getElementsByClassName("bubble sort")[0].addEventListener("click", async function (){
    disable();
    await bubble();
    enable();
  });