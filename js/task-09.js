function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
   changeColorBtn: document.querySelector('.change-color'),
  backgroundColorSpan: document.querySelector('.color'),
   
};

refs.changeColorBtn.addEventListener('click', function () {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.backgroundColorSpan.textContent = document.body.style.backgroundColor;
})