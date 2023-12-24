import { galleryItems } from './gallery-items.js';
// Change code below this line
const refGalleryContainer = document.querySelector(".gallery");
generateGalleryMarkup();
// var gallery = refGalleryContainer.simpleLightbox();
var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionType: 'attr',
    captionsData: 'alt'
});


function generateGalleryMarkup() {
    let data = galleryItems.map(getItemElMarkup).join("");
    refGalleryContainer.insertAdjacentHTML("afterbegin", data);
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
