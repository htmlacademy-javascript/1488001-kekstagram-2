import { createPhotos } from './data.js';
import { renderPhotos } from './render.js';
import { openForm } from './form.js';

renderPhotos(createPhotos());

openForm();

