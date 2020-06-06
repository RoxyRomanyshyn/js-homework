const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

const changeSize = event => {
    span.setAttribute("style", `font-size:${event.currentTarget.value}px`)
}

input.addEventListener('input', changeSize)