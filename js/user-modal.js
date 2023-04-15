const bigPicture = document.querySelector('.big-picture');
const closeModal = document.getElementById('picture-cancel');
const socialList = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.social__comments-loader');


const createElementLi = (comment, parentElement) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const p = document.createElement('p');

  // задаем атрибуты элементам
  img.setAttribute('class', 'social__picture');
  img.setAttribute('alt', comment.name);
  img.setAttribute('width', '35');
  img.setAttribute('height', '35');
  img.setAttribute('src', comment.avatar);
  p.setAttribute('class', 'social__text');
  p.textContent = comment.message;

  // добавляем элементы в родительский элемент
  li.setAttribute('class', 'social__comment');
  li.appendChild(img);
  li.appendChild(p);
  parentElement.appendChild(li);
};

let COUNT_COMMENTS = 5;


const socialCommentTeamplate = (comments) => {
  const outerDiv = document.createElement('div');

  outerDiv.classList.add('social__comment-count');
  const textNode1 = document.createTextNode(`${COUNT_COMMENTS} из `);

  const span = document.createElement('span');
  span.classList.add('comments-count');
  span.textContent = comments.length;

  const textNode2 = document.createTextNode(' комментариев');

  outerDiv.appendChild(textNode1);
  outerDiv.appendChild(span);
  outerDiv.appendChild(textNode2);
  const divSocial = document.querySelector('.big-picture__social');
  const child = document.querySelector('.social__comments');
  divSocial.insertBefore(outerDiv, child);
};

const commentsLoaderMore = (comments) => () => {
  const parentElement = bigPicture.querySelector('.social__comments');
  document.querySelector('.social__comment-count').remove();
  socialList.innerHTML = '';
  comments.slice(0, COUNT_COMMENTS + 5).forEach((comment) => createElementLi(comment, parentElement));

  if ((COUNT_COMMENTS + 5) >= comments.length) {
    COUNT_COMMENTS = comments.length;
  } else {
    COUNT_COMMENTS = COUNT_COMMENTS + 5;
  }
  socialCommentTeamplate(comments);
  if(COUNT_COMMENTS >= comments.length) {
    commentsLoader.classList.add('hidden');
  }
};

const onClickMore = (comments) => {
  commentsLoader.addEventListener('click', commentsLoaderMore(comments));
};

const onClickClose = (evt) => {
  evt.preventDefault ();
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeModal.removeEventListener('click',onClickClose);
  document.removeEventListener('keydown',onDocumentKeyDown);

};

function onDocumentKeyDown(evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault ();
    bigPicture.classList.add('hidden');
    document.removeEventListener('keydown',onDocumentKeyDown);
    closeModal.removeEventListener('click',onClickClose);
  }

}

const renderPictureDetails = ({ comments, description, likes, url }) => {
  document.querySelector('.social__comment-count').remove();
  socialList.innerHTML = '';
  COUNT_COMMENTS = comments.length < 5 ? comments.length : 5;
  socialCommentTeamplate(comments);
  document.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img').src = url;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  const parentElement = bigPicture.querySelector('.social__comments');

  if(comments.length > 5) {
    comments.slice(0, COUNT_COMMENTS).forEach((comment) => createElementLi(comment, parentElement));
    commentsLoader.classList.remove('hidden');

  } else {
    commentsLoader.classList.add('hidden');
    comments.slice(0, COUNT_COMMENTS).forEach((comment) => createElementLi(comment, parentElement));
  }
  onClickMore(comments);
};

export const showBigPictute = (picture) => {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown',onDocumentKeyDown);
  closeModal.addEventListener('click',onClickClose);
  const socialFooterBtn = document.querySelector('.social__footer-btn');
  const socialFooterText = document.querySelector('.social__footer-text');
  const socialComments = document.querySelector('.social__comments');
  socialFooterBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');
    img.classList.add('social__picture');
    img.src = 'img/avatar-6.svg';
    li.classList.add('social__comment');
    li.append(img);
    li.append(p);
    p.textContent = socialFooterText.value;
    socialComments.prepend(li);
    socialFooterText.value = '';
  });

  renderPictureDetails(picture);
};


