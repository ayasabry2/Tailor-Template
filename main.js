
/* =============== preloader ================= */
const preloader=document.getElementsByClassName("preloader")[0];
const header_content=document.getElementsByClassName("header-content")[0];
window.onload=function(){
  setTimeout(function(){
     preloader.style.transition="opacity 0.3s ease";
     preloader.style.opacity=0;

    setTimeout(function(){
      preloader.style.display="none";
      header_content.classList.add("visible");
    },400)
  },1000)
}

/* =============== navbar ================= */
const nav= document.getElementsByTagName("nav")[0];
const offer1=document.getElementsByClassName("offer1")[0];
const offer2=document.getElementsByClassName("offer2")[0];
const offer3=document.getElementsByClassName("offer3")[0];
const service1=document.getElementsByClassName("service1")[0];
const service2=document.getElementsByClassName("service2")[0];
const service3=document.getElementsByClassName("service3")[0];
const service4=document.getElementsByClassName("service4")[0];
window.onscroll=function(){
 if(scrollY>410){
  nav.classList.add("sticky_bar")
offer1.style.animation="fadeInUp 1s forwards"
offer2.style.animation="fadeInUp 1s .4s forwards"
offer3.style.animation="fadeInUp 1s .8s forwards"
 }
else{
nav.classList.remove("sticky_bar")}

if(scrollY>2100){
  service1.style.animation="fadeInUp 1s  forwards"
  service2.style.animation="fadeInUp 1s .4s forwards"
  service3.style.animation="fadeInUp 1s .8s forwards"
  service4.style.animation="fadeInUp 1s 1.2s forwards"
   }
}
/* =============== slider ================= */
let currentSlide = 1; 

function showSlide(n) {
    let slides = document.querySelectorAll('.content2');
    let buttons = document.querySelectorAll('.slider button');

    if (n > slides.length) {
        n = 1; 
    } else if (n < 1) {
        n = slides.length;
    }

    slides.forEach((slide, index) => {
        slide.classList.remove('active'); 
        slide.style.transform = 'translateX(100%)';
        slide.style.opacity = '0';
    });

    slides[n - 1].classList.add('active'); 
    slides[n - 1].style.transform = 'translateX(0)';
    slides[n - 1].style.opacity = '1';

    buttons.forEach(btn => btn.classList.remove('active')); 
    buttons[n].classList.add('active');

    currentSlide = n; 
}

function prev() {
    showSlide(currentSlide - 1);
}

function next() {
    showSlide(currentSlide + 1);
}

document.addEventListener("DOMContentLoaded", function () {
    showSlide(1);
});




