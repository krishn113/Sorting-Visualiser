async function merge(special, low, mid, high){
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await wait(delay);
        special[low + i].style.background = '#EF4F4F';
        left[i] = special[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await wait(delay);
        special[mid + 1 + i].style.background = '#FFCDA3';
        right[i] = special[mid + 1 + i].style.height;
    }
    await wait(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await wait(delay);
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            if((n1 + n2) === special.length){
                special[k].style.background = '#74c7b8';
            }
            else{
                special[k].style.background = '#AB7499';
            }
            
            special[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            if((n1 + n2) === special.length){
                special[k].style.background = '#74c7b8';
            }
            else{
                special[k].style.background = '#AB7499';
            } 
            special[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await wait(delay);
        if((n1 + n2) === special.length){
            special[k].style.background = '#74c7b8';
        }
        else{
            special[k].style.background = '#AB7499';
        }
        special[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await wait(delay);
        if((n1 + n2) === special.length){
            special[k].style.background = '#74c7b8';
        }
        else{
            special[k].style.background = '#AB7499';
        }
        special[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(special, l, r){
    if(l >= r){
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(special, l, m);
    await mergeSort(special, m + 1, r);
    await merge(special, l, m, r);
}

document.getElementsByClassName("merge sort")[0].addEventListener("click", async function (){
    let special = document.getElementsByClassName('bars');
    let l = 0;
    let r = parseInt(special.length) - 1;
    disable();
    await mergeSort(special, l, r);
    enable();
});