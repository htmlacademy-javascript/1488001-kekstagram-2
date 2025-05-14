const MAX_HASHTAGS = 5;
const MAX_DESCRIPTION_LENGTH = 140;
const HASHTAGS_REGEXP = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/i;

const photoUploadForm = document.querySelector('.img-upload__form');
const descriptionField = photoUploadForm.querySelector('.text__description');
const hashtagsField = photoUploadForm.querySelector('.text__hashtags');

const pristine = new Pristine(photoUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const getHashtags = (value) => value.trim().toLowerCase().split(/\s+/);

const validateHashtags = (value) => {
  if (!value.trim()) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((hashtag) => HASHTAGS_REGEXP.test(hashtag));
};

const checkHashtagsCount = (value) => {
  if (!value.trim()) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= MAX_HASHTAGS;
};

const isHashtagUnique = (value) => {
  if (!value.trim()) {
    return true;
  }
  const hashtags = getHashtags(value);
  const uniqueHashtags = [...new Set(hashtags)];
  return hashtags.length === uniqueHashtags.length;
};

const validateDescription = (value) => value.length <= MAX_DESCRIPTION_LENGTH;

pristine.addValidator(hashtagsField, validateHashtags,'Хэштег содержит недопустимые символы');

pristine.addValidator(hashtagsField, checkHashtagsCount, `Количество хэштегов не должно превышать ${MAX_HASHTAGS}`);

pristine.addValidator(hashtagsField, isHashtagUnique, 'Хэштеги не должны повторяться');

pristine.addValidator(descriptionField, validateDescription, `Количество символов в описании не должно превышать ${MAX_DESCRIPTION_LENGTH}`);

export const isValid = () => pristine.validate();

export const reset = () => pristine.reset();
