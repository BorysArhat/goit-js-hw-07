import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onImageClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
   <div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>
    `;
    })
    .join("");
}

function onImageClick(event) {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    let modal = basicLightbox.create(
      `
      <div class="modal">
      <img src= "${event.target.dataset.source}" width = "800"/>
      </div>`,
      {
        closable: true,
        onShow: (instance) => {
          instance.element().addEventListener("click", (e) => {
            if (e.target.nodeName === "IMG") {
              instance.close();
            }
          });
        },
      }
    );
    modal.show();
    if (event.target.nodeName === "IMG") {
      window.addEventListener("keydown", onPressKeyESC);
    }

    function onPressKeyESC(event) {
      if (event.code === "Escape") {
        modal.close();
        window.removeEventListener("keydown", onPressKeyESC);
      }
    }
  }
}
