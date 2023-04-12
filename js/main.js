import { renderThumbnails } from './miniature.js';
import { controlUploadFile } from './user-form.js';
import { showLoadOverlay } from './user-form.js';
import { setUserFormSubmit } from './util.js';
import { onClickClose2 } from './user-form.js';
import { buttonErrorClose } from './api.js';
import { buttonSuccessClose } from './api.js';
import { initFilterListeners } from './filter.js';
import './upload-photo.js';
// import { showAlert, debounce } from './util.js';

buttonErrorClose();
buttonSuccessClose();
controlUploadFile();
showLoadOverlay();


fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((similarUsers) => {
    renderThumbnails(similarUsers);
    initFilterListeners(similarUsers);
  });

// const RENDER_PHOTOS_DELAY = 500;
// try {
//   const data = await getData();
//   renderThumbnails(data);
//   initFilterListeners(data, debounce(renderThumbnails, RENDER_PHOTOS_DELAY));
// } catch (err) {
//   showAlert(err.message);
// }
setUserFormSubmit(onClickClose2);

