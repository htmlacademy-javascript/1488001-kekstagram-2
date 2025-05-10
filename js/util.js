import { DEBOUNCE_DELAY, DELAY_TIME } from "./constants.js";

const alertTemplate = document.querySelector('#data-error').content.querySelector('.data-error')
const body = document.body;

export const showAlert = () => {
  const alert = alertTemplate.cloneNode(true);
  body.append(alert);
  setTimeout(() => {
    alert.remove();
  }, DELAY_TIME)
};

export const debounce = (callback, timeoutDelay = DEBOUNCE_DELAY) => {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...arguments), timeoutDelay);
  };
}