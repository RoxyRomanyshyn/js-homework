let input;
const numbers = [];
let total = 0;

do {
  input = prompt('input you numbers');
  numbers.push(Number(input));
} while (input !== null);

for (const number of numbers) {
  if (numbers.length !== 0) {
    total += number;
  }
};

console.log(total);