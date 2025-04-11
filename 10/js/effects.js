
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectSelectors = document.querySelectorAll('.effects__radio');

const effectConfigs = {
  chrome:  { range: { min: 0, max: 1 }, start: 1, step: 0.1 },
  sepia:   { range: { min: 0, max: 1 }, start: 1, step: 0.1 },
  marvin:  { range: { min: 0, max: 100 }, start: 100, step: 1 },
  phobos:  { range: { min: 0, max: 3 }, start: 3, step: 0.1 },
  heat:    { range: { min: 1, max: 3 }, start: 3, step: 0.1 }
};

let currentEffect = 'none';

const useEffects = () => {
  const minimizePhoto = () => {
    let value = parseInt(scaleControlValue.value, 10);
    value -= 25;
    if (value > 0) {
      imagePreview.style.scale = `${value}%`;
      scaleControlValue.value = `${value}%`;
    }
  };

  const maximizePhoto = () => {
    let value = parseInt(scaleControlValue.value, 10);
    value += 25;
    if (value <= 100) {
      imagePreview.style.scale = `${value}%`;
      scaleControlValue.value = `${value}%`;
    }
  };

  scaleControlSmaller.addEventListener('click', minimizePhoto);
  scaleControlBigger.addEventListener('click', maximizePhoto);


  const hideSlider = () => {
    effectLevelSlider.parentElement.style.display = 'none';
  };

  const showSlider = () => {
    effectLevelSlider.parentElement.style.display = 'block';
  };

  const applyFilter = () => {
    const value = effectLevelSlider.noUiSlider.get();

    let filter = '';

    switch (currentEffect) {
      case 'chrome':
        filter = `grayscale(${value})`;
        break;
      case 'sepia':
        filter = `sepia(${value})`;
        break;
      case 'marvin':
        filter = `invert(${value}%)`;
        break;
      case 'phobos':
        filter = `blur(${value}px)`;
        break;
      case 'heat':
        filter = `brightness(${value})`;
        break;
      case 'none':
      default:
        filter = 'none';
        break;
    }

    imagePreview.style.filter = filter;
  };

  effectSelectors.forEach((selector) => {
    selector.addEventListener('change', (evt) => {
      if (evt.target.checked) {
        currentEffect = evt.target.value;

        if (currentEffect === 'none') {
          if (effectLevelSlider.noUiSlider) {
            effectLevelSlider.noUiSlider.destroy();
          }
          imagePreview.style.filter = 'none';
          hideSlider();
          return;
        }

        const config = effectConfigs[currentEffect];
        if (config) {
          if (!effectLevelSlider.noUiSlider) {
            noUiSlider.create(effectLevelSlider, {
              ...config,
              connect: 'lower',
            });

            effectLevelSlider.noUiSlider.on('update', () => {
              effectLevelValue.value = effectLevelSlider.noUiSlider.get();
              applyFilter();
            });
          } else {
            effectLevelSlider.noUiSlider.updateOptions(config);
          }

          showSlider();
          applyFilter();
        }
      }
    });
  });

  hideSlider();
};

export { useEffects };
