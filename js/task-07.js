const inputEl = document.querySelector('#font-size-control');

let textEl = document.querySelector('#text');

inputEl.addEventListener('input', changeSize);

function changeSize(event) {
    let textSize = parseInt(textEl.style.fontSize);
    textSize = inputEl.value;
    textEl.style.fontSize = `${textSize}px`;
}