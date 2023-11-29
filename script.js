var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesA");
    if (n!==undefined) {
      slideIndex=n;
    }
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} // Add this line
    setTimeout(showSlides, 10000); // Change image every 2 seconds
}
  