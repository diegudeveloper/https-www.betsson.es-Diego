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

//ACORDION//

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.accordion-button');

  buttons.forEach(function (button) {
      button.addEventListener('click', function () {
          const content = this.nextElementSibling;
          if (content.style.maxHeight) {
              content.style.maxHeight = null;
              this.classList.remove('active');
          } else {
              content.style.maxHeight = content.scrollHeight + 'px';
              this.classList.add('active');
          }
      });
  });
});


//cookies//

document.addEventListener('DOMContentLoaded', function () {
  const cookiesPopup = document.getElementById("cookiesPopup");

  // Función para establecer una cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Función para aceptar el aviso de cookies y establecer la cookie
  function acceptCookies() {
    setCookie("cookiesAccepted", "true", 30); // Establecer la cookie por 30 días
    cookiesPopup.style.display = "none";
  }

  // Función para cerrar el aviso de cookies sin establecer la cookie
  function closeCookies() {
    cookiesPopup.style.display = "none";
  }

  // Comprobar si la cookie ya ha sido aceptada
  if (document.cookie.indexOf("cookiesAccepted=true") === -1) {
    cookiesPopup.style.display = "block";
  } else {
    cookiesPopup.style.display = "none"; // Ocultar el mensaje si la cookie ya está aceptada
  }

  // Manejar el clic en el botón de aceptar
  const acceptButton = document.getElementById("acceptCookies");
  acceptButton.addEventListener("click", function () {
    acceptCookies();
  });

  // Manejar el clic en el botón de cerrar
  const closeCookiesButton = document.getElementById("closeCookies");
  closeCookiesButton.addEventListener("click", function () {
    closeCookies();
  });
});

