const imgSlider = document.querySelector('.img-slider');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const thumbnails = document.querySelector('.thumbnails');

// btnPrev.classList.add('hide');

let sliderCounter = 0;

const images = [
  'assets/img/01.webp', 
  'assets/img/02.webp', 
  'assets/img/03.webp', 
  'assets/img/04.webp', 
  'assets/img/05.webp'];

for(i = 0; i < images.length; i++) {
  const img = images[i];
  imgSlider.innerHTML += `<img class="slider-item hide" src="${img}">`;
  thumbnails.innerHTML += `
  <div class='img-container'>
    <img src="${img}">
    <div class='img-overlay overlay-dark'</div>
  </div>`;
}

const sliderItems = document.getElementsByClassName('slider-item');
const overlayArray = document.getElementsByClassName('img-overlay');

sliderItems[sliderCounter].classList.remove('hide');
overlayArray[sliderCounter].classList.remove('overlay-dark');
overlayArray[sliderCounter].classList.add('overlay-active');

btnPrev.addEventListener('click', function() {
  sliderItems[sliderCounter].classList.add('hide');
  overlayArray[sliderCounter].classList.add('overlay-dark');
  overlayArray[sliderCounter].classList.remove('overlay-active');
  sliderCounter--;

  if (sliderCounter < 0) {
    sliderCounter = sliderItems.length -1;
  }

  btnNext.classList.remove('hide')
  sliderItems[sliderCounter].classList.remove('hide');
  overlayArray[sliderCounter].classList.remove('overlay-dark');
  overlayArray[sliderCounter].classList.add('overlay-active');

  // if (sliderCounter === 0 ) {
  //   btnPrev.classList.add('hide');
  // }
});

btnNext.addEventListener('click', function() {
  sliderItems[sliderCounter].classList.add('hide');
  overlayArray[sliderCounter].classList.add('overlay-dark');
  overlayArray[sliderCounter].classList.remove('overlay-active');
  sliderCounter++;

  if (sliderCounter >= sliderItems.length) {
    sliderCounter = 0;
  }
  
  btnPrev.classList.remove('hide')
  sliderItems[sliderCounter].classList.remove('hide');
  overlayArray[sliderCounter].classList.remove('overlay-dark');
  overlayArray[sliderCounter].classList.add('overlay-active');

  // if (sliderCounter === sliderItems.length -1) {
  //   btnNext.classList.add('hide');
  // }
});