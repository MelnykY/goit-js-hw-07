import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
//console.log(SimpleLightbox);


const gallery = document.querySelector(".gallery");

const imageEl = galleryItems
  .map(
    ({ preview, original, description }) => `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", imageEl);
gallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: `alt`,
    captionDelay: `250`,
});

