const buttonPrev = document.querySelector('.slider__item-one');
const buttonNext = document.querySelector('.slider__item-two');
const contentElements = ['./assets/1.jpg', './assets/2.jpg', './assets/3.jpg', './assets/4.jpg', './assets/5.jpg', './assets/6.jpg'];
const containerElement = document.querySelector('.container__content__elem');
let index = 1;

function clearPageContents() {
  while (document.querySelector('.container__content__elem').childElementCount > 0) {
    document.querySelector('.container__content__elem').firstChild.remove();

    containerElement.classList.remove('open');
  }
}

function showPicture(value) {
  clearPageContents();
  setTimeout(() => {
    if (value > contentElements.length) {
      index = 1;
    }

    if (value < 1) {
      index = contentElements.length;
    }

    const image = document.createElement('img');
    image.src = contentElements[index - 1];

    containerElement.append(image);
    containerElement.classList.add('open');
  }, 100);
}

function plusSlides(value) {
  showPicture(index += value);
}

showPicture(index);

buttonNext.addEventListener('click', () => {
  plusSlides(1);
});
buttonPrev.addEventListener('click', () => {
  plusSlides(-1);
});
