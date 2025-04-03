const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach(({url, description, comments, likes}) => {
    const pictureLink = pictureTemplate.cloneNode(true);
    const image = pictureLink.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    pictureLink.querySelector('.picture__comments').textContent = comments.length;
    pictureLink.querySelector('.picture__likes').textContent = likes;
    fragment.append(pictureLink);
  });

  picturesContainer.append(fragment);
};

export { renderPhotos };
