const slider = document.querySelector(".slider");

let imgs = slider.querySelectorAll("img")

let index = 1;

setInterval(function() {
    let percentage = index * -100;
    slider.style.transform = "translateX(" + percentage + "%)";
    index++;
    if (index > (imgs.length - 1)) {
        index = 0;
    }
}, 3000);