import {getPositiveRandomInteger, getUnique, getRandomElement} from './util.js';
import {DESCRIPTIONS, LIKES_MIN, LIKES_MAX, COMMENTS_MIN, COMMENTS_MAX, AVATAR_MIN, AVATAR_MAX, PHOTOS_MIN, PHOTOS_MAX, MESSAGES, NAMES} from './constants.js';

const getUniqueId = getUnique(PHOTOS_MIN, PHOTOS_MAX);
const getUniquePhoto = getUnique(PHOTOS_MIN, PHOTOS_MAX);

const getComment = () => ({
  id: getPositiveRandomInteger(COMMENTS_MIN, COMMENTS_MAX),
  avatar: `img/avatar-${getPositiveRandomInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const getComments = () => {
  const count = getPositiveRandomInteger(COMMENTS_MIN, COMMENTS_MAX);
  const comments = [];
  for (let i = 1; i <= count; i++) {
    comments.push(getComment());
  }
  return comments;
};

const getPhoto = () => ({
  id: getUniqueId(),
  url: `photos/${getUniquePhoto()}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getPositiveRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: getComments()
});

const createPhotos = () => Array.from({ length: PHOTOS_MAX }, getPhoto);

export {createPhotos};
