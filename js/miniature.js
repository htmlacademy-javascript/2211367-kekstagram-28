import { showBigPictute } from './user-modal.js';

const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const container = document.querySelector('.pictures');
const h2 = document.querySelector('.pictures__title');
const imgUpload = document.querySelector('.img-upload');

const imgUploadClone = imgUpload.cloneNode(true);
const h2Clone = h2.cloneNode(true);


const createThumbnail = (picture) => {
  const { comments, description, likes, url, id } = picture;
  const thumbnail = thumbnailTemplate.cloneNode(true);
  const commentsLength = comments.length;

  thumbnail.addEventListener('click', (evt) => {
    evt.preventDefault();
    showBigPictute(picture);
    document.body.classList.add('modal-open');

  });

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = commentsLength;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.thumbnailId = id;
  return thumbnail;
};

const renderThumbnails = (similarUsers) => {
  container.querySelectorAll('.picture').forEach((element) => element.remove());

  container.append(h2Clone);
  container.append(imgUploadClone);
  const fragment = document.createDocumentFragment();
  similarUsers.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  container.append(fragment);


};

export { renderThumbnails };


