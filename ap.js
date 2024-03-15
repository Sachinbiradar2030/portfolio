const tog = document.querySelector("#mode");
const body = document.querySelector("body");
tog.addEventListener("click", () => {
    tog.classList.toggle("fa-moon");
    if(tog.classList.toggle('fa-sun')){
     body.style.background='#333333';
     body.style.color="white";
     body.style.transition='2s';
    }else{
     body.style.backgroundImage='linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)';
     
     body.style.color="black";
     body.style.transition='2s';
    }
 });
 let menu=document.querySelector("#menu");
 
 menu.addEventListener("click",()=>{
    
    nav=document.querySelector(".nav");
    nav.classList.toggle("active");


    let elements = document.querySelectorAll('.ele li');
    elements.forEach(element => {
        element.classList.toggle('active');
    });
 });
