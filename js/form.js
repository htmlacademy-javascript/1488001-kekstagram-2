import { reset as resetEffect } from './effects.js';
import { reset as resetScale } from './scale.js';
import { isValid } from './validate.js';

const body = document.body;
const photoUploadForm = document.querySelector('.img-upload__form');
const descriptionField = photoUploadForm.querySelector('.text__description');
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
  // closeButton.addEventListener('click', () => {
    photoEditModal.classList.add('hidden');
    body.classList.remove('modal-open');
    // photoUploadBtn.value = '';
    // photoBigPreview.src = '';
    // photoSmallPreviews.forEach((photoSmallPreview) => {
    //   photoSmallPreview.style.backgroundImage = '';
    // });
  // });

  photoUploadForm.reset();
  resetScale();
  resetEffect()
};

closeButton.addEventListener('click', () => {
  closeForm()
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    photoEditModal.classList.add('hidden');
    body.classList.remove('modal-open');
    // closeButton.click();
  }
});

photoUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (isValid()) {
    photoUploadForm.submit();
  } else {
    console.warn('Форма невалидна. Не отправляем.');
  }
});

descriptionField.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

export { openForm, closeForm };
