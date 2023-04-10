const date1 = document.getElementById("date1")
const date2 = document.getElementById("date2")
const header = document.getElementById("h-hide")
let yPos = window.scrollY
function split(){
    date1.style.transform = "rotate(-"+(window.scrollY/12.4)+"deg) translate(-"+(window.scrollY/19.1)+"vw)";
    date2.style.transform = "rotate("+(window.scrollY/12.4)+"deg) translate("+(window.scrollY/19.1)+"vw)";
    date1.style.opacity = ("1")-(window.scrollY/1500);
    date2.style.opacity = ("1")-(window.scrollY/1500);  
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