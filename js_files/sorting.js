function wait(sec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, sec); 
    }) 
}
function disable(){
    document.getElementsByClassName("bubble sort")[0].disabled = true;
    document.getElementsByClassName("merge sort")[0].disabled = true;
    document.getElementsByClassName("selection sort")[0].disabled = true;
    document.getElementsByClassName("quick sort")[0].disabled = true;
    document.getElementsByClassName("insertion sort")[0].disabled = true;
    document.getElementsByClassName("new array")[0].disabled = true;
    document.getElementsByClassName("size")[0].disabled = true;
}
function enable(){
    document.getElementsByClassName("bubble sort")[0].disabled = false;
    document.getElementsByClassName("merge sort")[0].disabled = false;
    document.getElementsByClassName("selection sort")[0].disabled = false;
    document.getElementsByClassName("quick sort")[0].disabled = false;
    document.getElementsByClassName("insertion sort")[0].disabled = false;
    document.getElementsByClassName("new array")[0].disabled = false;
    document.getElementsByClassName("size")[0].disabled = false;
}
function swap(el1, el2) {
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}
let size = document.getElementsByClassName("size")[0];
size.addEventListener('input',function(){
    createBars(parseInt(size.value));
});
let delay = 260;
let delayed = document.getElementsByClassName("speed")[0];
delayed.addEventListener('input',function(){
    delay = 360 - parseInt(delayed.value);
});
function deleteBars(){
    const bar = document.getElementById("bar-cont");
    bar.innerHTML = '';
}
let height = [];
createBars();
function createBars(number = 100) {
    deleteBars();
    const heights = [];
    for (let index = 0; index < number; index++) {
        heights[index] = Math.floor(100 * Math.random());
    }
    for (let index = 0; index < number; index++) {
        var bar = document.createElement("DIV");              
       document.getElementById("bar-cont").appendChild(bar); 
       var element = document.getElementById("bar-cont").getElementsByTagName("div")[index];
    element.classList.add("bars");
    }
    
    
    var bars = document.getElementsByClassName("bars");
    for (let index = 0; index < heights.length; index++) {
        bars[index].style.height = (5*heights[index])+"px";
    }  
}

document.getElementsByClassName("new array")[0].addEventListener("click", function(){
    enable();
    createBars(parseInt(size.value));
});

