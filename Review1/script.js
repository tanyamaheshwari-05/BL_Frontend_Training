const btn=document.getElementById("btn");
const head= document.querySelector(".header");
const foot=document.querySelector(".footer");
// console.log("foot");
 let isSwap =false;
 btn.addEventListener("click", () =>{
    isSwap=!isSwap;
    if(isSwap){
        head.classList.add("Swapped")
        foot.classList.add("Swapped")
        head.textContent="Swapped Footer"
        foot.textContent="Swapped Header"
    }
    else{
        head.classList.remove("Swapped")
        foot.classList.remove("Swapped")
        head.textContent="header"
        foot.textContent="footer"
        
    }
 });



 