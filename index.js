const openModal = document.querySelector('.openModal');
const closeModalBtn = document.querySelector('.closeModalBtn');
const modal = document.querySelector('.overlay');
const modalContent = document.querySelector('.content');
const images = document.getElementById('images');

// OPEN MODAL by button
openModal.addEventListener('click', () => {
    setModalContent(createText, 'hello');
})

// OPEN MODAL by click on list
images.addEventListener('click', ({ target }) => {
  if (target.nodeName === 'IMG') {
    setModalContent(createImage, target.src);
  }
});

// CLOSE MODAL #1
closeModalBtn.addEventListener('click', toCloseModal);
// CLOSE MODAL #2
modal.addEventListener(
  'click',
  ({ target }) => target.classList.contains('overlay') && toCloseModal()
);
// CLOSE MODAL #3
window.addEventListener('keydown', (e) => e.code === 'Escape' && toCloseModal());
window.addEventListener('keypress', e => {
  //   console.log('PRESS', e.code, e.key );
});
window.addEventListener('keyup', e => {
  //   console.log('UP', e.code, e.key);
});

function toCloseModal() {
    modal.classList.add('isHidden');
    modalContent.innerHTML = '';
}

function createImage(pathImg){
    const modalImg = document.createElement('img');
    modalImg.src = pathImg;
    modalImg.classList.add('containImage');
    return modalImg;
}

function createText(text) {
  return `<p>${text}</p>`;
}

function setModalContent(callback, value){
    modal.classList.remove('isHidden');
    const element = callback(value);
    if(typeof element === 'string'){
        modalContent.insertAdjacentHTML('afterbegin', element);
    }else {
        modalContent.insertAdjacentElement('afterbegin', element);
    }
}