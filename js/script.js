const imgSlider = document.querySelector('.img-slider');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

btnPrev.classList.add('hide');

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
}

const sliderItems = document.getElementsByClassName('slider-item');

sliderItems[sliderCounter].classList.remove('hide');

btnPrev.addEventListener('click', function() {
  sliderItems[sliderCounter].classList.add('hide');
  sliderCounter--;

  btnNext.classList.remove('hide')
  sliderItems[sliderCounter].classList.remove('hide');

  if (sliderCounter === 0 ) {
    btnPrev.classList.add('hide');
  }
});

btnNext.addEventListener('click', function() {
  sliderItems[sliderCounter].classList.add('hide');
  sliderCounter++;
  
  btnPrev.classList.remove('hide')
  sliderItems[sliderCounter].classList.remove('hide');

  if (sliderCounter === sliderItems.length -1) {
    btnNext.classList.add('hide');
  }
});