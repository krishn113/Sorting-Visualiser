async function insertion() {
    const special = document.getElementsByClassName("bars");
    special[0].style.background = "#74c7b8";
    for (let i = 1; i < special.length ; i++) {
        let j = i - 1 ;
        let x = special[i].style.height;
        special[i].style.background = "#EE9595";
        await wait(delay);
        while( j > -1 && parseInt(special[j].style.height)>parseInt(x)){
          special[j].style.background="#EE9595";
          special[j + 1].style.height = special[j].style.height;
          j--;
          await wait(delay);
         for(let t = 0 ; t < i ; t++){
           special[t].style.background = "#74c7b8";
          }
        }
        special[j+1].style.height = x;
        special[special.length - 1].style.background = "#74c7b8";
     }
  
}
  document.getElementsByClassName("insertion sort")[0].addEventListener("click", async function (){
    disable();
    await insertion();
    enable();
  });