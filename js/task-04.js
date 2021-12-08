const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');
const decrement = counterEl.firstElementChild;
const increment = counterEl.lastElementChild;

let counterValue = 0;

decrement.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

increment.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});