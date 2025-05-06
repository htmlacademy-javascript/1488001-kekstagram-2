const DESCRIPTIONS = [
  'Ловим момент 🌟',
  'Настроение дня',
  'Просто классика',
  'В нужное время, в нужном месте',
  'Без фильтров',
  'Когда слова лишние',
  'Мгновение счастья',
  'Здесь и сейчас',
  'Всё как в кино',
  'Поймал свет',
  'Тишина в кадре',
  'Почти случайно',
  'Атмосфера 🔥',
  'День как картина',
  'Мелочи делают всё',
  'Не фото — история',
  'Пауза между делами',
  'В кадре — душа',
  'Один из тысячи',
  'Увидел — сохранил',
  'Там, где хочется остаться',
  'Вдохнул — щёлк!',
  'Остановись, момент',
  'Просто красиво',
  'Без слов, но с чувством'
];
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
const NAMES = ['Иван', 'Пётр', 'Александр', 'Наталья', 'Екатерина', 'Татьяна'];

export const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25
};
export const SCALE_DEFAULT = Scale.MAX;

export { DESCRIPTIONS, LIKES_MIN, LIKES_MAX, COMMENTS_MIN, COMMENTS_MAX, AVATAR_MIN, AVATAR_MAX, PHOTOS_MIN, PHOTOS_MAX, MESSAGES, NAMES };

export const EFFECTS = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
  NONE: 'none'
};

export const effectConfigs = {
  [EFFECTS.CHROME]: {
    range: { min: 0, max: 1 },
    start: 1,
    step: 0.1,
    style: 'grayscale',
    units: ''
  },
  [EFFECTS.SEPIA]: {
    range: { min: 0, max: 1 },
    start: 1,
    step: 0.1,
    style: 'sepia',
    units: ''
  },
  [EFFECTS.MARVIN]: {
    range: { min: 0, max: 100 },
    start: 100,
    step: 1,
    style: 'invert',
    units: '%'
  },
  [EFFECTS.PHOBOS]: {
    range: { min: 0, max: 3 },
    start: 3,
    step: 0.1,
    style: 'blur',
    units: 'px'
  },
  [EFFECTS.HEAT]: {
    range: { min: 1, max: 3 },
    start: 3,
    step: 0.1,
    style: 'brightness',
    units: ''
  },
  [EFFECTS.NONE]: {
    range: { min: 1, max: 3 },
    start: 3,
    step: 0.1,
    style: 'brightness',
    units: ''
  },
};

export const Popups = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export const DELAY_TIME = 5000;
