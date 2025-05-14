import { renderPhotos } from './render.js';
import { openForm } from './form.js';
import { showAlert } from './util.js';
import { getData } from './api.js';
import { initFilters } from './filters.js';

getData()
  .then((photos) => {
    renderPhotos(photos);
    initFilters(photos);
  })
  .catch(() => {
    showAlert();
  });

openForm();