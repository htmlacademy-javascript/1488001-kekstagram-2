import { createPhotos } from './data.js';
import { renderPhotos } from './render.js';
import { openForm, closeForm } from './form.js';

renderPhotos(createPhotos());

openForm();
closeForm();
