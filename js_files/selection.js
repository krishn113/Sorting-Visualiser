async function selection() {
    const special = document.getElementsByClassName("bars");
    for (let i = 0; i < special.length - 1 ; i++) {
        let k = i;
        special[i].style.background = "#EE9595";
      for(let j = i +1 ; j < special.length  ; j++){
           special[j].style.background="#EE9565";
        await wait(delay);
            if(parseInt(special[j].style.height) < parseInt(special[k].style.height)){
                if(k!== i){
                    special[k].style.background = "#267fc5";
                }
                k = j;
            } 
            else{
                special[j].style.background = "#267fc5";
            }              
        }
        await wait(delay);
        swap(special[i],special[k]);
        special[k].style.background = "#267fc5"
        special[i].style.background = "#74c7b8";
    }    
    
    special[special.length-1].style.background = "#74c7b8"; 
  }
  document.getElementsByClassName("selection sort")[0].addEventListener("click", async function (){
    disable();
    await selection();
    enable();
});
  