const regularInput = document.querySelector('#regular');
const debounceInput = document.querySelector('#debounce');

function debounce() {
  const resultDebounce = document.querySelector('.result_debounce');
  setTimeout(() => {
    resultDebounce.innerText = debounceInput.value;
  }, 1000);
}

function regular() {
  const resultRegular = document.querySelector('.result-regular');
  resultRegular.innerText = regularInput.value;
}
debounceInput.addEventListener('input', debounce);
regularInput.addEventListener('input', regular);
