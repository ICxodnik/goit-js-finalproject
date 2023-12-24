import { galleryItems } from './gallery-items.js';
import { generateGalleryMarkup } from './gallery-generator.js';
// Change code below this line

const refGalleryContainer = document.querySelector(".gallery");

generateGalleryMarkup(refGalleryContainer, galleryItems);
var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionType: 'attr',
    captionsData: 'alt'
});
