const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach((b)=>{
    b.addEventListener("click",(e)=>{
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id;

    }})

})