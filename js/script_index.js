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
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/* Scroll index */
const sobre_mi_index = document.querySelector('.sobre-mi');
const name_animation = 'animate__animated';
const name_animation_dois = 'animate__fadeInLeft'
let active = 0;

document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Use a tolerance range to account for browser variations
  if (scrollPosition >= 580 && scrollPosition <= 590 && active === 0) {
    sobre_mi_index.classList.add(name_animation);
    sobre_mi_index.classList.add(name_animation_dois);
    active++;

    // Consider removing the animation class after a delay or on scroll direction change
    setTimeout(() => {
      sobre_mi_index.classList.remove(name_animation);
    }, 2000); // Adjust the delay as needed
  }
});