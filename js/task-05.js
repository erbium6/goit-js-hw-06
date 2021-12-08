const elems = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

elems.input.addEventListener('input', onInput)

function onInput(event) {
  elems.output.textContent = 'Anonymous';
  if (event.currentTarget.value !== '') {
    elems.output.textContent = event.currentTarget.value;
  }
}