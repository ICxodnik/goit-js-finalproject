import { galleryItems } from './gallery-items.js';
// Change code below this line

const refGalleryContainer = document.querySelector(".gallery");
refGalleryContainer.addEventListener("click", function onClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains("gallery__image")) {
        return;
    }
    showImage(e.target.dataset.source);
});

generateGalleryMarkup();

function generateGalleryMarkup() {
    let data = "";
    for (let galleryItem of galleryItems) {
        data += getItemElMarkup(galleryItem);
    }
    refGalleryContainer.insertAdjacentHTML("afterbegin", data);
}

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

function getItemElMarkup({ preview, original, description }) {
    return (
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </li>`)
}
