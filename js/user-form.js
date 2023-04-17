const loadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('#upload-cancel');
const sliderElement = document.querySelector('.effect-level__slider');
const effectsRadioChrome = document.querySelector('#effect-chrome');
const effectsRadioSepia = document.querySelector('#effect-sepia');
const effectsRadioMarvin = document.querySelector('#effect-marvin');
const effectsRadioPhobos = document.querySelector('#effect-phobos');
const effectsRadioHeat = document.querySelector('#effect-heat');
const effectLevelImg = document.querySelector('.img-upload__effect-level');
const imgPreview = document.getElementById('img');
const imgPicturePreview = document.querySelector('.img-upload__preview img');

effectLevelImg.style.display = 'none';
imgPreview.style.removeProperty('filter');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  step: 0.1,
  start: 1,
  connect: [true, false],
});

// Функция для вычисления нового значения CSS-свойства filter в зависимости от положения слайдера
function updateFilterValue(effect, value) {
  const filter = `${effect}(${value})`;
  document.getElementById('img').style.filter = filter;
}
function updateFilterMarvin(value) {
  const filter = `invert(${value}%)`;
  document.getElementById('img').style.filter = filter;
}
function updateFilterPhobos(value) {
  const filter = `blur(${value}px)`;
  document.getElementById('img').style.filter = filter;
}
function updateFilterHeat(value) {
  const filter = `brightness(${value})`;
  document.getElementById('img').style.filter = filter;
}

// Подписываемся на событие update слайдера и обновляем CSS-свойство filter
sliderElement.noUiSlider.on('update', (values) => {
  const currentValue = parseFloat(values[0]);

  if (effectsRadioChrome.checked) {
    updateFilterValue('grayscale', currentValue);
  } else if (effectsRadioSepia.checked) {
    updateFilterValue('sepia', currentValue);
  } else if (effectsRadioMarvin.checked) {
    updateFilterMarvin(currentValue);
  } else if (effectsRadioPhobos.checked) {
    updateFilterPhobos(currentValue);
  }else if (effectsRadioHeat.checked) {
    updateFilterHeat(currentValue);
  }
});

// Подписываемся на события изменения радио-кнопок и обновляем настройки слайдера
effectsRadioChrome.addEventListener('change', () => {
  effectLevelImg.style.display = 'block';

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  });

  updateFilterValue('grayscale', sliderElement.noUiSlider.get());
});

effectsRadioSepia.addEventListener('change', () => {
  effectLevelImg.style.display = 'block';

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
  });

  updateFilterValue('sepia', sliderElement.noUiSlider.get());
});
effectsRadioMarvin.addEventListener('change', (evt) => {
  effectLevelImg.style.display = 'block';
  if (evt.target.checked) {
    sliderElement.removeAttribute('disabled', true);
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      start: 100
    });
  } else {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
    sliderElement.noUiSlider.set(0);
  }

  updateFilterMarvin(sliderElement.noUiSlider.get());
});


effectsRadioPhobos.addEventListener('change', (evt) => {
  effectLevelImg.style.display = 'block';

  if (evt.target.checked) {
    sliderElement.removeAttribute('disabled', true);
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
      start: 3
    });
  } else {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
    });
    sliderElement.noUiSlider.set(0);
  }
  updateFilterPhobos(sliderElement.noUiSlider.get());
});


effectsRadioHeat.addEventListener('change', (evt) => {
  effectLevelImg.style.display = 'block';
  if (evt.target.checked) {
    sliderElement.removeAttribute('disabled', true);
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
      start: 3
    });
  } else {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
    });
    sliderElement.noUiSlider.set(3);
  }
  updateFilterHeat(sliderElement.noUiSlider.get());
});


export function controlUploadFile () {
  document.body.classList.add('modal-open');
}

const fieldValue100 = document.querySelector('.scale__control--value');

const effectsNoneDefault = document.getElementById('effect-none');
const textComments = document.getElementById('textComments');
const textHashtags = document.getElementById('textHashtags');

export const onClickClose2 = (evt) => {
  evt.preventDefault ();
  const fileInput = document.getElementById('upload-file');
  fileInput.value = '';
  textHashtags.value = '';
  textComments.value = '';
  imgPreview.style.removeProperty('filter');
  imgPicturePreview.classList.add('preview100') ;
  loadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  fieldValue100.value = 100;
  effectsNoneDefault.checked = true;
  const effectLevelImg1 = document.querySelector('.img-upload__effect-level');
  effectLevelImg1.style.display = 'none';
};


function onDocumentKeyDown2(evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault ();
    loadOverlay.classList.add('hidden');
  }
}

export const showLoadOverlay = () => {
  document.addEventListener('keydown', onDocumentKeyDown2);
  imgUploadCancel.addEventListener('click', onClickClose2);

};


// Добавляем обработчик событий keydown
textComments.addEventListener('keydown', (evt) => {
  // Проверяем, нажата ли клавиша Esc
  if (evt.key === 'Escape') {
    // Проверяем, находится ли фокус в поле ввода комментария
    if (document.activeElement === textComments) {
      // Предотвращаем действие по умолчанию (закрытие формы редактирования изображения)
      document.removeEventListener('keydown',onDocumentKeyDown2);
      imgUploadCancel.removeEventListener('submit', () => {
        evt.preventDefault();
      });
    }
  }
});
// Добавляем обработчик событий keydown
textHashtags.addEventListener('keydown', (evt) => {
  // Проверяем, нажата ли клавиша Esc
  if (evt.key === 'Escape') {
    // Проверяем, находится ли фокус в поле ввода комментария
    if (document.activeElement === textHashtags) {
      // Предотвращаем действие по умолчанию (закрытие формы редактирования изображения)
      document.removeEventListener('keydown',onDocumentKeyDown2);
      imgUploadCancel.removeEventListener('submit', () => {
        evt.preventDefault();
      });
    }
  }
});

const imgPicture = document.getElementById('img');
// Добавляем функцию для масштабирования фотографии (+) (-)
function countFunc(count) {
  const btnPlus = count.querySelector('.scale__control--bigger');
  const btnMinus = count.querySelector('.scale__control--smaller');
  const field = count.querySelector('.scale__control--value');
  let fieldValue = parseFloat(field.value);


  // Добавляем клик по кнопке (-)
  btnMinus.addEventListener('click', () => {
  // Делаем проверку размера масштаба для изоброжения
    if (fieldValue > 25) {
      fieldValue = fieldValue - 25;
      field.value = +fieldValue;
    }
    // Делаем проверку по размеру изоброжения присвоив CSS-класс
    if (+fieldValue === 25) {
      imgPicture.classList.add('preview25');
      imgPicture.classList.remove('preview50');
    }

    if (+fieldValue === 50) {
      imgPicture.classList.add('preview50');
      imgPicture.classList.remove('preview75');
    }

    if (+fieldValue === 75) {
      imgPicture.classList.add('preview75');
      imgPicture.classList.remove('preview100');
    }

  });

  // Добавляем клик по кнопке (+)
  btnPlus.addEventListener('click', () => {
    // Делаем проверку размера масштаба для изоброжения
    if (fieldValue < 100) {
      fieldValue = fieldValue + 25;
      field.value = fieldValue;
    }
    // Делаем проверку по размеру изоброжения присвоив CSS-класс
    if (fieldValue === 25) {
      imgPicture.classList.add('preview25');
    }

    if (fieldValue === 75) {
      imgPicture.classList.add('preview75');
    }

    if (fieldValue === 50) {
      imgPicture.classList.add('preview50');
    }

    if (fieldValue === 100) {
      imgPicture.classList.add('preview100');
    }
  });
}

const counts = document.querySelectorAll('.img-upload__scale');
counts.forEach(countFunc);


const effectNone = document.getElementById('effect-none');

if (effectNone.checked) {
  imgPreview.style.removeProperty('filter');

}
const remove = () => {
  imgPreview.style.removeProperty('filter');
  effectLevelImg.style.display = 'none';
};
effectNone.addEventListener('click', remove);

