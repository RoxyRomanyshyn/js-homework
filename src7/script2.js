const ul = document.getElementById('ingredients');

ul.innerHTML = '';

const lis = ul.querySelectorAll('li');
const newFragment = document.createDocumentFragment();

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

ingredients.forEach(el => {
    const curentLi = document.createElement('li');
    curentLi.innerHTML = el + '';
    newFragment.appendChild(curentLi);
});

ul.appendChild(newFragment);