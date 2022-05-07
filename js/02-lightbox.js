import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
 
const creatDivElementmarkup = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
   <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"  title="${description}"/>
</a>
</li>
    `
}).join("");

galleryEl.insertAdjacentHTML('afterbegin', creatDivElementmarkup);
console.log(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
    captionDelay: 250
});