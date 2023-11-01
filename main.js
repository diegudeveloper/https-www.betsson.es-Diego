// <script type="text/javascript">
$(document).ready(function(){
    $(".sub-btn").click(function() {
        $(this).next(".sub-menu").slideToggle();
    });
});

// menu responsive

const menu = document.querySelector(".menu-nav");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active")
})

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active")
})

//SLIDER//


const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider .slide");

let counter = 1;
const slideWidth = slides[0].clientWidth;

function nextSlide() {
  counter = (counter + 1) % slides.length;
  slider.style.transform = `translateX(-${counter * slideWidth}px)`;
  
  // Ocultar el contenido de las otras diapositivas y mostrar el contenido de la diapositiva actual
  slides.forEach((slide, index) => {
    if (index === counter) {
      slide.querySelector(".slide-content").style.display = "block";
    } else {
      slide.querySelector(".slide-content").style.display = "none";
    }
  });
}

setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos




// const slider = document.querySelector(".slider");

// let imgs = slider.querySelectorAll("img")

// let index = 1;

// setInterval(function() {
//     let percentage = index * -100;
//     slider.style.transform = "translateX(" + percentage + "%)";
//     index++;
//     if (index > (imgs.length - 1)) {
//         index = 0;
//     }
// }, 3000);