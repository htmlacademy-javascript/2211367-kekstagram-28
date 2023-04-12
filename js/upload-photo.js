const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const uploadFileElement = document.querySelector('.img-upload__input[type=file]');
const imgDefaultElement = document.querySelector('.img-upload__preview img');

export const ifSuccessButton = () => {
  const file = uploadFileElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imgDefaultElement.src = URL.createObjectURL(file);
    document.querySelector('.pictures').prepend(imgDefaultElement);
  }
};

