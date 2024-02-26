const imgSlider = document.querySelector('.img-slider');


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

const sliderItem = document.getElementsByClassName('slider-item');