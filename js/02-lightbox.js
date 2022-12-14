import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const galleruMarkup = (acc, { preview, original, description }) => {
  return (
    acc +
    `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
  );
};

const imgMarkup = galleryItems.reduce(galleruMarkup, "");
gallery.insertAdjacentHTML("afterbegin", imgMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(lightbox);
