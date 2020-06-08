import images from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const model = document.querySelector('.js-lightbox');
const image = document.querySelector('.lightbox__image');
const button = document.querySelector('.lightbox__button');


function addGall() {
  const initHTML = images.reduce((acc, el) => {
    acc += `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${el.original}"
        >
          <img
            class="gallery__image"
            src="${el.preview}"
            data-source="${el.original}"
            alt="${el.description}"
          />
        </a>
      </li>`;
    return acc;
  }, '');

  gallery.insertAdjacentHTML('beforeend', initHTML);
}
addGall();

gallery.addEventListener('click', onClick);

function onClick(e) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  model.classList.add('is-open');
  image.src = e.target.dataset.source;
  document.addEventListener('keydown', esc);
}
button.addEventListener('click', closeClick);

function closeClick(e) {
  if (e && e.target === image) {
    return;
  }
  model.classList.remove('is-open');
  image.src = '';
  document.removeEventListener('keydown', esc);
}

function esc(e) {
  if (e.keyCode === 27) {
    closeClick();
  }
}