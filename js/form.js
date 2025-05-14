import { postData } from './api.js';
import { Popups, SubmitButtonText } from './constants.js';
import { reset as resetEffect } from './effects.js';
import { removeEscapeControl, setEscapeControl } from './escapeControl.js';
import { showPopup } from './popup.js';
import { reset as resetScale } from './scale.js';
import { isValid } from './validate.js';

const body = document.body;
const photoUploadForm = document.querySelector('.img-upload__form');
const descriptionField = photoUploadForm.querySelector('.text__description');
const hashtagsField = photoUploadForm.querySelector('.text__hashtags');
const photoUploadInput = photoUploadForm.querySelector('.img-upload__input');
const photoUploadBtn = photoUploadForm.querySelector('.img-upload__submit');
const photoEditModal = photoUploadForm.querySelector('.img-upload__overlay');
const photoBigPreview = photoUploadForm.querySelector('.img-upload__preview img');
const photoSmallPreviews = document.querySelectorAll('.effects__preview');
const closeButton = photoUploadForm.querySelector('.img-upload__cancel');

const canCloseForm = () => !(document.activeElement === descriptionField || document.activeElement === hashtagsField);

const openForm = () => {
  document.addEventListener('DOMContentLoaded', () => {
    photoUploadInput.addEventListener('input', () => {
      photoEditModal.classList.remove('hidden');
      body.classList.add('modal-open');
      const file = photoUploadInput.files[0];
      setEscapeControl(closeForm, canCloseForm);

      if (file && file.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(file);
        photoBigPreview.src = imageUrl;
        photoSmallPreviews.forEach((photoSmallPreview) => {
          photoSmallPreview.style.backgroundImage = `url(${imageUrl})`;
        });
      }
    });
  });
};

function closeForm() {
  photoEditModal.classList.add('hidden');
  body.classList.remove('modal-open');
  photoUploadForm.reset();
  resetScale();
  resetEffect();
}

closeButton.addEventListener('click', () => {
  closeForm();
  removeEscapeControl();
});

const disableButton = (isDisabled = true) => {
  photoUploadBtn.disabled = isDisabled;
  photoUploadBtn.textContent = isDisabled ? SubmitButtonText.SENDING : SubmitButtonText.IDLE;
};

photoUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (isValid()) {
    disableButton();
    postData(new FormData(photoUploadForm))
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        closeForm();
        removeEscapeControl();
        showPopup(Popups.SUCCESS);
      })
      .catch(() => {
        showPopup(Popups.ERROR);
      })
      .finally(() => {
        disableButton(false);
      });
  }
});

export { openForm, closeForm };
