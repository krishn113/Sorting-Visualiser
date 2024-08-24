async function partition(special , l , r){
    let i = l-1 ;
    special[r].style.background = "#EE9565";
    for(let j = l; j<=r-1;j++){
        special[j].style.background = "#FFCDA3";
        await wait(delay);

        if(parseInt(special[j].style.height)<parseInt(special[r].style.height)){
            i++;
            swap(special[i],special[j]);
            special[i].style.background = '#EF4F4F';
            special[j].style.background = '#EF4F4F';
            await wait(delay);
        }else{
            special[j].style.background = '#AB7499';
        }
    }
    i++;
    await wait(delay) ;
    swap(special[i],special[r]);
    
    special[r].style.background = '#AB7499';
    special[i].style.background = '#74c7b8';
    await wait(delay);
    for(let k = 0; k < special.length; k++){
        if(special[k].style.background != '#74c7b8')
            special[k].style.background = '#74c7b8';
    }
    return i;
}
async function quick( special, l ,r ) {
    let j ; 
    if(l<r){
        j = await partition(special,l,r);
        await quick(special,l,j-1);
        await quick(special,j+1,r);
    }else{
        if(l >= 0 && r >= 0 && l <special.length && r <special.length){
            special[r].style.background = '#74c7b8';
            special[l].style.background = '#74c7b8';
        }
  }
}
  document.getElementsByClassName("quick sort")[0].addEventListener("click", async function (){
    const special = document.getElementsByClassName("bars");
    let l = 0;
    let r = special.length - 1;
    disable();
    await quick(special,l,r);
    enable();    
});