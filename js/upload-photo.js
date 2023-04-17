const FILE_TYPES = ['jpg', 'jpeg', 'png'];
let saveFile = null;
const uploadFileElement = document.querySelector('.img-upload__input[type=file]');

export const ifSuccessButton = () => {
  let isValid = true;
  let file = null;
  if (uploadFileElement?.files[0]) {
    file = uploadFileElement.files[0];
  } else {
    file = saveFile;
  }
  const fileName = file?.name?.toLowerCase();
  if (fileName && file) {
    saveFile = file;
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (!matches) {
      isValid = false;
    }
  } else {
    isValid = false;
  }
  return isValid;
};

