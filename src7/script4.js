const clickPlus = document.querySelector('button[data-action="decrement"]');
const clickMinus = document.querySelector('button[data-action="increment"]');

let clickCount = 0;
const step = 1;
const val = document.querySelector('#value');

const increm = function () {
    clickCount -= step;
    val.textContent = clickCount;
}

const decrem = function () {
    clickCount += step;
    val.textContent = clickCount;
}

clickPlus.addEventListener('click', increm);
clickMinus.addEventListener('click', decrem);