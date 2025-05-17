import { Scale, SCALE_DEFAULT } from './constants.js';

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

let currentScale = SCALE_DEFAULT;

const render = () => {
  imagePreview.style.transform = `scale(${currentScale}%)`;
  scaleControlValue.value = `${currentScale}%`;
};

const minimizePhoto = () => {
  currentScale = Math.max(currentScale - Scale.STEP, Scale.MIN);
  render();
};

const maximizePhoto = () => {
  currentScale = Math.min(currentScale + Scale.STEP, Scale.MAX);
  render();
};

const onMinusClick = () => {
  minimizePhoto();
};

const onPlusClick = () => {
  maximizePhoto();
};

scaleControlSmaller.addEventListener('click', onMinusClick);
scaleControlBigger.addEventListener('click', onPlusClick);

export const reset = () => {
  currentScale = SCALE_DEFAULT;
  render();
};
