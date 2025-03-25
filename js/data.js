import {getPositiveRandomInteger, getUnique} from './util.js';

const DESCRIPTIONS = ['Утро', 'Котик', 'Солнышко', 'Дерево'];
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const PHOTOS_MIN = 1;
const PHOTOS_MAX = 25;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = ['Иван', 'Пётр', 'Александр', 'Наталья', 'Екатерина', 'Татьяна', 'Олег', 'Владимир', 'Михаил', 'Константин'];

const getUniqueId = getUnique(PHOTOS_MIN, PHOTOS_MAX);
const getUniquePhoto = getUnique(PHOTOS_MIN, PHOTOS_MAX);

const getRandomElement = (arr) => arr[getPositiveRandomInteger(0, arr.length - 1)];

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

console.log(createPhotos());


