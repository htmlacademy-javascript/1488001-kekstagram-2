import { Popups } from './constants.js';
import { removeEscapeControl, setEscapeControl } from './escapeControl.js';
const body = document.body;
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const templates = {
  [Popups.SUCCESS]: successTemplate,
  [Popups.ERROR]: errorTemplate
};

export const showPopup = (type) => {
  const popup = templates[type].cloneNode(true);

  popup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      popup.remove();
      removeEscapeControl();
    }
  });
  setEscapeControl(()=> {
    popup.remove();
  })
  body.append(popup);
};
