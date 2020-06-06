const refs = {
    input: document.querySelector('#validation-input'),
    leng: document.querySelector('input[data-length="6"]')

}

const addCurrectSymbol = event => {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        refs.input.classList.remove('invalid')
        refs.input.classList.add('valid')
    } else {
        refs.input.classList.remove('valid')
        refs.input.classList.add('invalid')
    }
}

refs.input.addEventListener('blur', addCurrectSymbol)
console.log(refs.input);