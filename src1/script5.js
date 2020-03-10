const checkForSpam = function (message) {
    const words = message.split(' ');
    for (const word of words) {
        if (word.toLoverCase === 'sale' || word.toLoverCase === 'SPAM') {
            return true;
        }
        return false;
    }
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true