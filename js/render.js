import { createPhotos } from './data.js';

const picturesContainer = document.querySelector('.pictures');
const picturesList = createPhotos();
const pictureLikes = document.querySelector('.picture__likes');
const pictureComments = document.querySelector('.picture__comments');

picturesList.forEach((picture) => {
  const pictureElement = document.createElement('img');
  pictureElement.src = picture.url;
  pictureElement.alt = picture.description;
  // pictureLikes.textContent = picture.likes;
  // pictureComments.textContent = picture.comments;
  picturesContainer.append(pictureElement);
});

export { picturesContainer, picturesList, pictureLikes, pictureComments };
