// const onDocumentKeydown = (evt) => {
//   const form = document.querySelector('.img-upload__overlay');
//   if (evt.key === 'Escape' && !form.classList.contains('hidden')) {
//     evt.preventDefault() ;
//     closeForm();
//   }
// };

const body = document.body;
const photoUploadForm = document.querySelector('.img-upload__form');
const photoUploadBtn = photoUploadForm.querySelector('.img-upload__input');
const photoEditModal = photoUploadForm.querySelector('.img-upload__overlay');
const photoBigPreview = photoUploadForm.querySelector('.img-upload__preview img');
const photoSmallPreviews = document.querySelectorAll('.effects__preview');
const closeButton = photoUploadForm.querySelector('.img-upload__cancel');


const openForm = () => {
  document.addEventListener('DOMContentLoaded', () => {
    photoUploadBtn.addEventListener('input', () => {
      photoEditModal.classList.remove('hidden');
      body.classList.add('modal-open');
      const file = photoUploadBtn.files[0];

      if (file && file.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(file);
        photoBigPreview.src = imageUrl;
        photoSmallPreviews.forEach((photoSmallPreview) => {
          photoSmallPreview.style.backgroundImage = `url(${imageUrl})`;
        });
      } else {
        console.warn('Файл не является изображением или не выбран');
      }
    });
  });
};

const closeForm = () => {
  closeButton.addEventListener('click', () => {
    photoEditModal.classList.add('hidden');
    body.classList.remove('modal-open');
    photoUploadBtn.value = '';
    photoBigPreview.src = '';
    photoSmallPreviews.forEach((photoSmallPreview) => {
      photoSmallPreview.style.backgroundImage = '';
    });
  });
};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    photoEditModal.classList.add('hidden');
    body.classList.remove('modal-open');
    // closeButton.click();
  }
});


const pristine = new Pristine(photoUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error'
});

const validateHashtags = (value) => {
  if (!value.trim()) {
    return true;
  }
  const hashtags = value.trim().split(/\s+/);
  if (hashtags.length > 5) {
    return false;
  }
  const pattern = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/i;
  return hashtags.every((hashtag) => pattern.test(hashtag));
};

const validateDescription = (value) => {
  const maxLength = 140;
  return value.length <= maxLength;
};

pristine.addValidator(photoUploadForm.querySelector('.text__hashtags'), validateHashtags, 'Ошибка');
pristine.addValidator(photoUploadForm.querySelector('.text__description'), validateDescription, 'Ошибка');

const descriptionField = document.querySelector('.text__description');
descriptionField.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

photoUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    photoUploadForm.submit();
  } else {
    console.warn('Форма невалидна. Не отправляем.');
  }
});


export { openForm, closeForm };
