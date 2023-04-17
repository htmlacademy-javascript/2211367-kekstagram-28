import { ifSuccessButton } from './upload-photo.js';

const bodyClass = document.querySelector('body');

const errorDiv = document
  .querySelector('#error')
  .content.querySelector('.error');

const successDiv = document
  .querySelector('#success')
  .content.querySelector('.success');


export const requestManager = async (formData) => {

  try {
    const isValid = ifSuccessButton();
    if(!isValid) {
      throw new Error();
    }
    const response = await fetch('https://28.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      }
    );
    if (!response.ok) {
      throw new Error();
    }
    bodyClass.append(successDiv);

    const fileInput = document.getElementById('upload-file');
    fileInput.value = '';


  } catch (err) {
    errorDiv.classList.remove('hidden');
    bodyClass.append(errorDiv);
  }
};

// Добавляем клик и нажатие Esc на кнопку "Круто" при успешной загруки изоброжения
export const successButton = document
  .querySelector('#success')
  .content.querySelector('.success__button');

successButton.addEventListener('click', ()=> {
}
);


const closeButtonSuccess = (evt) => {
  evt.preventDefault ();
  successDiv.classList.add('hidden');
  successButton.removeEventListener('click',closeButtonSuccess);

};

function onCloseSuccess (evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault ();
    successDiv.classList.add('hidden');
  }
  successButton.removeEventListener('click',closeButtonSuccess);
}


export const buttonSuccessClose = () => {
  document.addEventListener('keydown',onCloseSuccess);
  successDiv.addEventListener('click',closeButtonSuccess);
};


// Добавляем клик и нажатие Esc на кнопку "Попробовать еще раз" при НЕ успешной загруки изоброжения
const errorButton = document
  .querySelector('#error')
  .content.querySelector('.error__button');


const closeButtonError = (evt) => {
  evt.preventDefault ();
  errorDiv.classList.add('hidden');
  const loadOverlay = document.querySelector('.img-upload__overlay');
  loadOverlay.classList.remove('hidden');
  errorButton.removeEventListener('click',closeButtonError);
};

function onCloseError (evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault ();
    errorDiv.classList.add('hidden');

  }
  errorButton.removeEventListener('click',closeButtonError);
}


export const buttonErrorClose = () => {
  document.addEventListener('keydown',onCloseError);
  errorDiv.addEventListener('click',closeButtonError);
};

