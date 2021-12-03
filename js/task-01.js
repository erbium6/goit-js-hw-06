
const getElementItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${getElementItems.length}`);

getElementItems.forEach(element => {

    const getElementTitle = element.querySelector('h2');

    const getElementLi = element.querySelectorAll('li');

    console.log(`Category: ${getElementTitle.textContent}`);
    console.log(`Elements: ${getElementLi.length}`);
})


