import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = makeGalerryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function makeGalerryMarkup(items) {
    return items.map(({preview, original, description}) => {
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

    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);
    instance.show();

    window.addEventListener('keydown', onEscButtonPressClose);

    function onEscButtonPressClose(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        };
    };
};


