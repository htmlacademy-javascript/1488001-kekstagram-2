const body = document.body;
const modal = document.querySelector('.big-picture');
const bigImage = modal.querySelector('.big-picture__img img');
const bigImageCaption = modal.querySelector('.social__caption');
const closeButton = modal.querySelector('.big-picture__cancel');
const likesCount = modal.querySelector('.likes-count');
const commentsShownCount = modal.querySelector('.social__comment-shown-count');
const commentsTotalCount = modal.querySelector('.social__comment-total-count');
const commentsContainer = modal.querySelector('.social__comments');
const commentCounter = modal.querySelector('.social__comment-count');
const commentsLoader = modal.querySelector('.comments-loader');


const showModal = (isShow = true) => {
  if (isShow) {
    modal.classList.remove('hidden');
    body.classList.add('modal-open');
  } else {
    modal.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const renderCard = ({ url, description, comments, likes }) => {
  bigImage.src = url;
  bigImage.alt = description;
  bigImageCaption.textContent = description;
  likesCount.textContent = likes;
  commentsTotalCount.textContent = comments.length;
};

const renderComments = (comments) => {
  const commentHTML = comments.map((comment) => `
    <li class="social__comment">
      <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
      <p class="social__text">${comment.message}</p>
    </li>
  `).join('');

  commentsContainer.innerHTML = commentHTML;
  commentCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

const openModal = ({ url, description, comments, likes }) => {
  showModal();
  renderCard({ url, description, comments, likes });
  renderComments(comments);
};

const closeModal = () => {
  showModal(false);
};

closeButton.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeModal();
  }
});

export { openModal };
