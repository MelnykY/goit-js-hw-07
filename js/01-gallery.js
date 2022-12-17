import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
// const imageEl = galleryItems
//   .map(({ preview, original, description }) => {
//     return `<div class="gallery__item">
//     <a class="gallery__link" href='${original}'>
//     <img class="gallery__image"
//     src ='${preview}' 
//     alt ='${description}' 
//     data-source='${original}'
//     />
//   </a>
// </div>`;
//   })
//   .join("");

  const imageEl = galleryItems
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
    <a class="gallery__link" href='${original}'>
    <img class="gallery__image"
    src ='${preview}' 
    alt ='${description}' 
    data-source='${original}'
    />
  </a>
</div>`
    )
    .join("");

gallery.insertAdjacentHTML('beforeend', imageEl);
gallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();

  
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );
  instance.show();

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") instance.close();
  });
}