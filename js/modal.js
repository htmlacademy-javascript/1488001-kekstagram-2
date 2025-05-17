import { COMMENTS_PORTION } from './constants.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

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
const commentTemplate = modal.querySelector('.social__comment');

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
  const commentsToShow = allComments.splice(0, COMMENTS_PORTION);
  const comments = commentsToShow.map((comment) => {
    const newComment = commentTemplate.cloneNode(true);
    const imageAvatar = newComment.querySelector('.social__picture');
    imageAvatar.src = comment.avatar;
    imageAvatar.alt = comment.name;
    newComment.querySelector('.social__text').textContent = comment.message;
    showCommentsCount++;
    return newComment;
  });

  commentsContainer.append(...comments);
  commentsShownCount.textContent = showCommentsCount;

  if (!allComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const loadMoreComments = () => {
  renderComments();
};

const onLoaderButtonClick = () => {
  loadMoreComments();
};

const openModal = ({ url, description, comments, likes }) => {
  allComments = [...comments];
  commentsContainer.innerHTML = '';
  showModal();
  renderCard({ url, description, comments, likes });
  showCommentsCount = 0;
  renderComments();
  commentCounter.classList.remove('hidden');
  setEscapeControl(closeModal);
};

function closeModal() {
  showModal(false);
}

closeButton.addEventListener('click', () => {
  closeModal();
  removeEscapeControl();
});

commentsLoader.addEventListener('click', onLoaderButtonClick);

export { openModal };
