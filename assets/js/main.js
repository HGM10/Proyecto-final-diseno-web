// var slideIndex = 0;

// showSlides();

// function showSlides() {
//        var i;
//        var slides = document.getElementsByClassName("mySlides");
//        for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//        }

//        slideIndex++;
//        if(slideIndex > slides.length) {slideIndex = 1}
//        slides[slideIndex-1].style.display = "block";
//        setTimeout(showSlides,5000);
// }

let aparecer = document.querySelector(".aparece");
let menu= document.querySelector(".menu-hover");
console.log(menu);

aparecer.addEventListener('click', (a) => {
       menu.classList.toggle('efecto');
       console.log(menu.classList);
});

let menuClick = document.getElementById('menu-click');
let enlaces = document.querySelector('.navegacion');

menuClick.addEventListener('click', () =>{
    enlaces.classList.toggle('click');
    // enlaces.style.clipPath = 'circle(150% at 100% 0)';
    // enlaces.style.transition = 'clipPath 2s';
});

console.log(enlaces.style);

console.log(menu.style);