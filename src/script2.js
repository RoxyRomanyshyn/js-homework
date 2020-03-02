'use strict';

const total = 100;

let order = prompt('Вкажіть кількість', '');

if (total >= order) {
    alert('Заказ оформлен, с вами свяжется менеджер');
} else {
    alert('На складе недостаточно товаров!');
}