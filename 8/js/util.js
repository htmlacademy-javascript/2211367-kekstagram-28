const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

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
// Добавляем Pristine
const pristine = new Pristine(loadForm, {
  classTo: 'nikita',
  errorTextParent: 'nikita',
  errorTextClass: 'nikita',
});

loadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    // console.log('Можно отправлять');
  } else {
    // console.log('Форма невалидна');
  }
});

// const tags = validateHashTag(['#MyTag', '#Tag123', '#HashTag','Sveta','Sergey','Anton','#Tag123','#Tag1234','#Tag1000','#Tag101']);

// const validComments = [];
// const validate2 = (comment, arr) => {
// // максимальная длина одного комментария 140 символов;
//   if (comment.length > 140) {
//     return false;
//   } else {
//     return true;
//   }
//   return validComments;
// };
// console.log(validate2);

// const commentsValidate = validateComment(['dfohgdfkjgsldjkghjksldjfhjdsfksdkhgjkdsgkl', 'ворплвырповадыловпролвраповырполврпрловрплдоврпловраплорваопрлваоплваопр', 'лоавопо','Sveta','Sergey','Anton','#Tag123','#Tag1234','#Tag1000','#Tag101'])

export { getRandomArrayElement, getRandomInteger };
