'use strict';

let droidsToBuy = prompt('Какое количество дроидов Вы хотите купить?', '');

const credits = 23580;
const pricePerDroid = 3000;

let totalPrice = (pricePerDroid * droidsToBuy);

if (droidsToBuy == null) {
    console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else {
    console.log(`Вы купили ${droidsToBuy} дроидов, на счету осталось ${credits-totalPrice} кредитов.`);
}