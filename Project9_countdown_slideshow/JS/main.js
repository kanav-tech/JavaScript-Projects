// Countdown Timer Function
function countdown() {
  var seconds = parseInt(document.getElementById("seconds").value);
  var timer = document.getElementById("timer");

  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a positive number of seconds.");
    return;
  }

  timer.innerHTML = seconds;

  function tick() {
    seconds--;
    timer.innerHTML = seconds;

    if (seconds === 0) {
      alert("Time's up!");
      timer.innerHTML = "";
    } else {
      setTimeout(tick, 1000);
    }
  }

  setTimeout(tick, 1000);
}

// Slideshow logic
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Current slide controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Show the slide corresponding to slideIndex
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show current slide and activate dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}