function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const backgroundColor = document.querySelector('.color')

const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
};

const textColor = () => {
  backgroundColor.textContent = getRandomHexColor();
};

changeColorBtn.addEventListener('click', changeColor);
changeColorBtn.addEventListener('click', textColor);
