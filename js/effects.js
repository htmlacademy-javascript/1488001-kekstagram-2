import { effectConfigs, EFFECTS } from './constants.js';

const imagePreview = document.querySelector('.img-upload__preview img');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectsContainer = document.querySelector('.effects__list');
const sliderContainer = document.querySelector('.effect-level');

let currentEffect = EFFECTS.NONE;

noUiSlider.create(effectLevelSlider, {
  range: { min: 0, max: 1 },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

const isDefault = () => currentEffect === EFFECTS.NONE;

const renderSlider = () => {
  if (isDefault()) {
    sliderContainer.classList.add('hidden');
  } else {
    sliderContainer.classList.remove('hidden');
  }
};

const applyFilter = () => {
  if (isDefault()) {
    imagePreview.style.filter = '';
  } else {
    const value = effectLevelValue.value;
    const { style, units } = effectConfigs[currentEffect];
    imagePreview.style.filter = `${style}(${value}${units})`;
  }
};

const updateSlider = () => {
  const { range, start, step } = effectConfigs[currentEffect];
  effectLevelSlider.noUiSlider.updateOptions({ range, start, step });
};

effectLevelSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
  applyFilter();
});

effectsContainer.addEventListener('change', ({ target }) => {
  currentEffect = target.value;
  renderSlider();
  updateSlider();
});

export const reset = () => {
  currentEffect = EFFECTS.NONE;
  renderSlider();
  updateSlider();
};

reset();
