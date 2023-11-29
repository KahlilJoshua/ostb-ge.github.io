const ost = document.querySelector("img");
let x = 0
ost.onclick = function(){
    x+=360;
    ost.style.transform = "rotate("+ x +"deg)";
    ost.style.transition = "2s"
}