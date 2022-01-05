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
  let slides = document.getElementsByClassName('my-slides');
  let dots = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < dots.length; i++) {
    if (dots[i].className == 'dot active') {
      dots[i].className = 'dot';
    }
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className.replace("active", "");
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

let right = 0;


function showRight() {
  let space = document.querySelector('.body-6-2-flex');
  let userWidth = document.documentElement.clientWidth;
  let userWidthParsed = parseInt(userWidth);
  let difference = 1200 - userWidth;

  if (userWidthParsed <= 1200) {
    right += 200;
    if (right >= difference) {
      right = difference;
    }
    space.style.right = right + 'px';
    console.log(userWidth)
  }
}

function showLeft() {
  let space = document.querySelector('.body-6-2-flex');
  let userWidth = document.documentElement.clientWidth;
  let userWidthParsed = parseInt(userWidth);
  let difference = 1200 - userWidth;
  
  right -= 200;
  if (right <= 0) {
    right = 0;
  }
  space.style.right = right + 'px';
}

// $(document).ready(function () {
//   $('.body-6-2-flex').slick();
//
// });
