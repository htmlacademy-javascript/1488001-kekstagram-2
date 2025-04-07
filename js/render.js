import { openModal } from './modal.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

let localPhotos;

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();
  localPhotos = [...photos];

  photos.forEach(({id, url, description, comments, likes}) => {
    const thumbnail = pictureTemplate.cloneNode(true);
    const image = thumbnail.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.dataset.id = id;
    fragment.append(thumbnail);
  });

  picturesContainer.append(fragment);
};

picturesContainer.addEventListener('click', ({target}) => {
  const card = target.closest('.picture');
  if (card) {
    const id = Number(card.dataset.id);
    const photo = localPhotos.find((item) => item.id === id);
    openModal(photo);
  }
});

export { renderPhotos };
