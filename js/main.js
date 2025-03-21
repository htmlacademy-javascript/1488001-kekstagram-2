const PHOTOS_MIN = 1;
const PHOTOS_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = ['Иван', 'Пётр', 'Александр', 'Наталья', 'Екатерина', 'Татьяна', 'Олег', 'Владимир', 'Михаил', 'Константин'];

// Функция - генератор случайного положительного целого числа
const getPositiveRandomInteger = (min, max) => {
  const lowerLimit = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upperLimit = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const positiveRandomInteger = Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit;
  return Math.floor(positiveRandomInteger);
};

// Функция - генератор уникального случайного положительного целого числа
const getUniqueIdNumberFromGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getPositiveRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getPositiveRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

// Функция получения случайного элемента из массива
const getRandomArrayElement = (elements) => elements[getPositiveRandomInteger(0, elements.length - 1)];

// Функция создания уникального идентификатора для фотографии
const generatePhotoId = getUniqueIdNumberFromGenerator(PHOTOS_MIN, PHOTOS_MAX);

// Функция создания фотографии (объекта)
const createPhoto = () => {
  const id = generatePhotoId();
  return {
    id,
    url: `photos/${id}.jpg`,
    description: 'Одно из лучших фото на Земле, но это не точно',
    likes: getPositiveRandomInteger(LIKES_MIN, LIKES_MAX),
    comment: [{
      id: getPositiveRandomInteger(COMMENTS_MIN, COMMENTS_MAX),
      avatar: `img/avatar-${getPositiveRandomInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    }],
  };
};

console.log(createPhoto());

// const createPhoto1 = () => ({
//     id: getUniqueIdNumberFromGenerator(PHOTOS_MIN, PHOTOS_MAX),
//     url: `photos/${this.id}.jpg`,
//     description: 'Лучшее фото на Земле',
//     likes: getPositiveRandomInteger(LIKES_MIN, LIKES_MAX),
//     comment: [{
//       id: getPositiveRandomInteger(COMMENTS_MIN, COMMENTS_MAX),
//       avatar: `img/avatar-${getPositiveRandomInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
//       message: getRandomArrayElement(MESSAGES),
//       name: getRandomArrayElement(NAMES),
//     }],
// });

// console.log(createPhoto1());
