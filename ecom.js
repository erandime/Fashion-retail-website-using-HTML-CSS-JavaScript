let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].id = dots[i].id.replace("active", " ");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].id = "active";
}

let autoIndex = 0;
showSlidesAuto();

function showSlidesAuto() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    autoIndex++;
    if (autoIndex > slides.length) {
        autoIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].id = dots[i].id.replace("active", " ");
    }
    slides[autoIndex - 1].style.display = "block";
    dots[autoIndex - 1].id = "active";
    setTimeout(showSlidesAuto, 4000); // Change image every 3 seconds
}
/* Tried another method :)
 
 function currentSlide(n) { 
 let x = "img:nth-child(" + n + ")";
 document.querySelector(x).style.display = "block";
 }
 */


