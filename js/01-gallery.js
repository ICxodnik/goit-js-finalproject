import { galleryItems } from './gallery-items.js';
import { generateGalleryMarkup } from './gallery-generator.js';
// Change code below this line

const refGalleryContainer = document.querySelector(".gallery");

generateGalleryMarkup(refGalleryContainer, galleryItems);

refGalleryContainer.addEventListener("click", function onClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains("gallery__image")) {
        return;
    }
    showImage(e.target.dataset.source);
});

function showImage(imgSource) {
    const eventHandler = (e) => {
        if (e.code != "Escape") { return; }
        popup.close();
    }

    const popup = basicLightbox.create(`<img src="${imgSource}" />`, {
        onShow() {
            document.addEventListener("keydown", eventHandler);
        },
        onClose() {
            document.removeEventListener("keydown", eventHandler);
        }
    });
    popup.show();
}
