const title = document.getElementById("title")
const header = document.getElementById("h-hide")
let yPos = window.scrollY
function split(){
    if(window.scrollY <= 585){
        title.style.transform = "translate(0,"+(window.scrollY/20)+"vw)";
    }
}

// hides and shows the header
function headerHide(){
    if (yPos < window.scrollY){
        header.style.top = "-8vh";
    } else if (yPos > window.scrollY){
        header.style.top = "0";
    }
    yPos = window.scrollY
}

console.log("JS Loaded!")