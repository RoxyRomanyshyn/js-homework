'use script';

let total = 0;
let message;

do {
  message = prompt('Введіть число:');
  if (Number.isNaN(Number(message))) {
    alert('Це не число!');
  } else {
    total += Number(message);
  }
} while (message != null);

alert(`Сума дорівнює ${total + message}`);
