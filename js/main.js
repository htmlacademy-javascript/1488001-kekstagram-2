import { renderPhotos } from './render.js';
import { openForm } from './form.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

getData()
  .then((photos) => {
    renderPhotos(photos);
  })
  .catch((e) => {
    showAlert();
  });

openForm();
