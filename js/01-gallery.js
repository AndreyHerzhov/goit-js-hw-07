import { galleryItems } from './gallery-items.js';
// Change code below this line


const refs = {
    gallery: document.querySelector('.gallery'),
    
}
 
const createList = function (elements) {
    return elements.map(el =>    `
    <div class="gallery__item">
        <a class="gallery__link" href="${el.original}">
          <img
          class="gallery__image"
          src="${el.preview}"
          data-source="${el.original}"
          alt="${el.description}"
           />
        </a>
    </div>`,
   ).join('')
  }

const newMarkUp = createList(galleryItems)
refs.gallery.innerHTML = newMarkUp

refs.gallery.addEventListener('click', onImageClick)
 
function onImageClick(e) {
    e.preventDefault()
    if(e.target.nodeName !== 'IMG') {
        return;
    }
    
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" alt="${e.target.alt}">
	`, {
		onShow: (instance) => window.addEventListener('keydown', onClickModalClose),
		onClose: (instance) => window.removeEventListener('keydown', onClickModalClose),
        className: 'lightbox',
	})

	instance.show()

	function onClickModalClose(evt) {
    if(evt.code ===  'Escape') {
        console.log('ESCAPE')
        instance.close()
      }
    }
}




 

	

 
   
 
  

 