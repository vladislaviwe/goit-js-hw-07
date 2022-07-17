import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = makeGalerryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function makeGalerryMarkup(items) {
    return items.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    }).join("");
};

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    const isGalleryImage = evt.target.classList.contains("gallery__image");
    if (!isGalleryImage) {
        return;
    }

    return new SimpleLightbox(".gallery__item", {captionsData: "alt", captionDelay: 250});
};
