let color1 = document.querySelector("#picker1"); 
let color2 = document.querySelector("#picker2"); 
let container = document.querySelector(".container");
let h4 = document.querySelector("h4");
let btn = document.querySelector(".btn");

btn.addEventListener("click",function(){
    h4.innerText = `linear gradient(to bottom right, ${color1.value} ,${color2.value})`;
    container.style.background = "linear-gradient(to bottom right,"+ color1.value +","+ color2.value +")";
})