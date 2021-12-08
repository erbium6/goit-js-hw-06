const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');


const ingredientsList = ingredients.map(ingredient => {
  const ingArr = document.createElement('li');
  ingArr.classList.add('item');
  ingArr.textContent = ingredient;
  return ingArr;
});

ulEl.append(...ingredientsList);

