import { requestManager } from './api.js';

// Получаем случайное число
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


//Валидация
export const validateHashTag = (tagsToValidate)=> {
  const validTags = [];
  const validate = (hashtag, arr) => {
    // хэш-тег начинается с символа # (решётка);
    if (!hashtag.startsWith('#')) {
      return false;
    }

    // хеш-тег не может состоять только из одной решётки;
    if (hashtag.length === 1) {
      return false;
    }

    // максимальная длина одного хэш-тега 20 символов, включая решётку;
    if (hashtag.length > 20) {
      return false;
    }

    // строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
    const regex = /^[a-zA-Z0-9]+$/;
    const tagContent = hashtag.substring(1);
    if (!regex.test(tagContent)) {
      return false;
    }

    // один и тот же хэш-тег не может быть использован дважды;
    if (arr.includes(hashtag.toLowerCase())) {
      return false;
    }

    return true;
  };

  for (const tag of tagsToValidate) {
    if (validTags.length >= 5) {
      break;
    }
    if (validate(tag, validTags)) {
      validTags.push(tag.toLowerCase());
    }

  }

  return validTags;

};

const loadForm = document.querySelector('.img-upload__form');
const loadOverlay = document.querySelector('.img-upload__overlay');
const loadDiv = document.querySelector('.img-upload__preview');
let imageD = null;
let flag = false;


const processLoadedImage = (evt) => {
  const fileUrl = URL.createObjectURL(evt.target.files[0]);
  const imagePreview = loadOverlay.getElementsByClassName('image-preview')[0];
  const image = document.createElement('img');
  image.src = fileUrl;

  if (!flag) {
    imageD = imagePreview;
    imagePreview.src = fileUrl;
    flag = true;
  } else {
    imageD.src = fileUrl;
    loadDiv.append(imageD);
  }
  loadOverlay.classList.remove('hidden');
  URL.revokeObjectURL(evt.target.files[0]);
};
const fileInput = document.getElementById('upload-file');
fileInput.addEventListener('change', processLoadedImage);


// Добавляем Pristine
const pristine = new Pristine(loadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper'
});


const setUserFormSubmit = (onSuccess) => {
  loadForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const hashtagInput = document.getElementById('textHashtags');
      if (validateHashTag(hashtagInput.value)) {

        const formData = new FormData(evt.target);
        requestManager(formData).then(() => onSuccess(evt));
      }
    }
  }
  );
};

export { setUserFormSubmit };
export { getRandomArrayElement, getRandomInteger };
