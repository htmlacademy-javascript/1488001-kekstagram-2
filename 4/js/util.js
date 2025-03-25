const getPositiveRandomInteger = (a, b) => {
  const lowerLimit = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upperLimit = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const positiveRandomInteger = Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit;
  return Math.floor(positiveRandomInteger);
};

const getUnique = (a, b) => {
  const previousValues = [];

  return function () {
    let currentValue = getPositiveRandomInteger(a, b);

    if (previousValues.length >= (b - a + 1)) {
      console.error('Перебраны все числа из диапазона от ' + a + ' до ' + b);
      return null;
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getPositiveRandomInteger(a, b);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export {getPositiveRandomInteger, getUnique};
