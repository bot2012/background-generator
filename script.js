var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setColor(){
    body.style.background = 
    "linear-gradient(to left, " 
    + color2.value 
    + "," 
    + color1.value 
    + ")";
    css.textContent = body.style.background + ";";
}

//we are using input event listener the best to get input

color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);