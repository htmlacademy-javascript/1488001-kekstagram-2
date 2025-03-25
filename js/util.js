const getPositiveRandomInteger = (a, b) => {
  const lowerLimit = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upperLimit = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const positiveRandomInteger = Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit;
  return Math.floor(positiveRandomInteger);
};

const getUnique = (min, max) => {
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

const getRandomElement = (arr) => arr[getPositiveRandomInteger(0, arr.length - 1)];

export {getPositiveRandomInteger, getUnique, getRandomElement};
