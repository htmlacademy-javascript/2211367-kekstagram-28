import { renderThumbnails } from './miniature.js';
import { controlUploadFile } from './user-form.js';
import { showLoadOverlay } from './user-form.js';
import { setUserFormSubmit } from './util.js';
import { onClickClose2 } from './user-form.js';
import { buttonErrorClose } from './api.js';
import { buttonSuccessClose } from './api.js';
import { initFilterListeners } from './filter.js';
import { mas } from './data.js';
import './upload-photo.js';

buttonErrorClose();
buttonSuccessClose();
controlUploadFile();
showLoadOverlay();


fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((similarUsers) => {
    similarUsers.forEach((item) => {
      mas.push(item);
    });
    renderThumbnails(mas);
    initFilterListeners(mas);
  });

setUserFormSubmit(onClickClose2);

