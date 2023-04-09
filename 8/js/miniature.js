import { showBigPictute } from './user-modal.js';

const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const container = document.querySelector('.pictures');

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

const renderThumbnails = (pictures) => {

  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  container.append(fragment);

};

export { renderThumbnails };
