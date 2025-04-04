const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach(({url, description, comments, likes}) => {
    const thumbnail = pictureTemplate.cloneNode(true);
    const image = thumbnail.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    fragment.append(thumbnail);
  });

  picturesContainer.append(fragment);
};

export { renderPhotos };
