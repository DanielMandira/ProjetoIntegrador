let slideIndex = 1;
setTimeout(function () {
  showSlides(slideIndex);
}, 250);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function loading(){
  document.querySelector('body').style.visibility="hidden";
  document.querySelector("body").style.overflow="hidden";
  document.getElementById("load").style.visibility="visible";
  setTimeout(()=>{
    document.getElementById("load").style.visibility="hidden";
    document.querySelector("body").style.overflow="visible";
    document.querySelector("body").style.visibility="visible";
  },500)
}