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

const COMMENTS_PORTION = 5;

let allComments = [];
let showCommentsCount = 0;


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

const renderComments = () => {
  const commentsToShow = allComments.slice(0, showCommentsCount);
  const commentHTML = commentsToShow.map((comment) => `
    <li class="social__comment">
      <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
      <p class="social__text">${comment.message}</p>
    </li>
  `).join('');

  commentsContainer.innerHTML = commentHTML;
  commentsShownCount.textContent = commentsToShow.length;

  if (showCommentsCount >= allComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const loadMoreComments = () => {
  showCommentsCount += COMMENTS_PORTION;
  renderComments();
};

const openModal = ({ url, description, comments, likes }) => {
  allComments = comments;
  showCommentsCount = COMMENTS_PORTION;

  showModal();
  renderCard({ url, description, comments, likes });
  renderComments();
  commentCounter.classList.remove('hidden');
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

commentsLoader.addEventListener('click', loadMoreComments);

export { openModal };
