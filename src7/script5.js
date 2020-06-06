const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');


const addName = event => {
    if (event.currentTarget.value.length > 0) {

        output.textContent = input.value;
    } else {
        output.textContent = 'незнакомец';
    }
}

input.addEventListener('input', addName)

console.log(input);
console.log(output);