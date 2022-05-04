import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
 
const creatDivElementmarkup = galleryItems.map(({preview, original, description}) => {
   return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div >
    `
}).join("");
  
galleryEl.insertAdjacentHTML('afterbegin', creatDivElementmarkup);
galleryEl.addEventListener('click', modalPreviev)

  
function modalPreviev(ev) {
    ev.preventDefault()
    if (ev.target.nodeName !== "IMG")  
    { return }
    const url = ev.target.dataset.source;
    let instance = basicLightbox.create(`
    <img src="${url}">
  `);
    instance.show()
};





console.log(galleryItems);
