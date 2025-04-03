// 1. ФУНКЦИЯ ДЛЯ ПРОВЕРКИ ДЛИНЫ СТРОКИ
const checkCharsetLength = (charset = '', maxLength = 1) => charset.toString().length <= maxLength;
console.log(checkCharsetLength('проверяемая строка', 20));
console.log(checkCharsetLength('проверяемая строка', 18));
console.log(checkCharsetLength('проверяемая строка', 10));
console.log('--ПРОВЕРКА ДЛИНЫ СТРОКИ ЗАВЕРШЕНА--');


// 2. ФУНКЦИЯ ДЛЯ ПРОВЕРКИ ЯВЛЯВЕТСЯ ЛИ СТРОКА ПАЛИНДРОМОМ
function isPalindrome(charset = '') {
  let reversedCharset = '';
  const charsetLowerCase = charset.toString().toLowerCase().replaceAll(' ', '');
  for (let i = charsetLowerCase.length - 1; i >= 0; i--) {
    reversedCharset += charsetLowerCase[i];
  }
  return charsetLowerCase === reversedCharset;
}
console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл '));
console.log('--ПРОВЕРКА СТРОКИ НА ПАЛИНДРОМ ЗАВЕРШЕНА--');


// 3. ФУНКЦИЯ ДЛЯ ИЗВЛЕЧЕНИЯ ЦИФР ИЗ СТРОКИ
// Вариант 1 (с использованием isFinite)
function extractNumbers1(charset) {
  let resultingCharset = '';
  const readyCharset = charset.toString().replaceAll(' ', '');
  for (let i = 0; i < readyCharset.length; i++) {
    if (isFinite(readyCharset[i])) {
      resultingCharset += readyCharset[i];
    }
  }
  return parseInt(resultingCharset, 10);
}
console.log(extractNumbers1('2023 год'));
console.log(extractNumbers1('ECMAScript 2022'));
console.log(extractNumbers1('1 кефир, - 0.5 батона'));
console.log(extractNumbers1('агент 007'));
console.log(extractNumbers1('а я томат'));
console.log(extractNumbers1(2023));
console.log(extractNumbers1(-1));
console.log(extractNumbers1(1.5));
console.log('--ИЗВЛЕЧЕНИЕ ЦИФР ЗАВЕРШЕНО--');

// Вариант 2 (с использованием Number.isNaN)
function extractNumbers2(charset) {
  let resultingCharset = '';
  const readyCharset = charset.toString().replaceAll(' ', '');
  for (let i = 0; i < readyCharset.length; i++) {
    if (!Number.isNaN(parseInt(readyCharset[i], 10))) {
      resultingCharset += readyCharset[i];
    }

  }
  return parseInt(resultingCharset, 10);
}
console.log(extractNumbers2('2025 год'));
console.log(extractNumbers2('ECMAScript 2024'));
console.log(extractNumbers2('2 кефира, 0.5 батона'));
console.log(extractNumbers2('агент 006'));
console.log(extractNumbers2('а я томат'));
console.log(extractNumbers2(2025));
console.log(extractNumbers2(-10));
console.log(extractNumbers2(1.59));
console.log('--ИЗВЛЕЧЕНИЕ ЦИФР ЗАВЕРШЕНО--');


// 4. ФУНКЦИЯ ДЛЯ ПОИСКА НОМЕРА ПОДЪЕЗДА И ЭТАЖА ПО НОМЕРУ КВАРТИРЫ
function calcEntranceNumAndFloorNum(floorsCount, appartmentsPerFloor, appartmentNumber) {
  const appartmentsPerEntrance = floorsCount * appartmentsPerFloor;
  const entranceNum = Math.ceil(appartmentNumber / appartmentsPerEntrance);
  console.log('Номер подъзда ' + entranceNum);
  const floorNum = Math.ceil((appartmentNumber - appartmentsPerEntrance * (entranceNum - 1)) / appartmentsPerFloor);
  console.log('Номер этажа ' + floorNum);
}
calcEntranceNumAndFloorNum(5, 3, 45);
console.log('--ПОИСК КВАРТИРЫ ЗАВЕРШЁН--');


// 5. ФУНКЦИИ ДЛЯ РИСОВАНИЯ
// Вариант 1. Прямоугольник
const renderRectangle = (v, h) => {
  let result = '';
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= v; j++) {
      result += '*';
    }
    result += '\n';
  }
  return result;
};
console.log(renderRectangle(6, 5));

// Вариант 2. Прямоугольная рамка
const renderRectangularFrame = (v, h) => {
  let result = '';
  for (let i = 1; i <= h; i++) {
    if (i === 1 || i === h) {
      for (let j = 1; j <= v; j++) {
        result += '*';
      }
      result += '\n';
    } else {
      const spaces = ' '.repeat(v - 2);
      result += '*' + spaces + '*' + '\n';
    }
  }
  return result;
};
console.log(renderRectangularFrame(6, 5));

// Вариант 3.1. Верхний левый прямоугольный треугольник (вариант А)
const height1 = 5;
for (let i = 1; i <= height1; i++) {
  console.log('* '.repeat(i));
}
console.log('\n');

// Вариант 3.2. Верхний левый прямоугольный треугольник (вариант Б)
const height2 = 5;
let counter1 = 0;
for (let i = height2; i > 0; i--) {
  counter1++;
  console.log('* '.repeat(counter1) + ' '.repeat(i - 1));
}
console.log('\n');

// Вариант 4. Верхний правый прямоугольный треуольник
const height4 = 5;
for (let i = 1; i <= height4; i++) {
  console.log('  '.repeat((height4 - i)) + '* '.repeat(i));
}
console.log('\n');

// Вариант 5. Нижний правый прямоугольный треуольник
const height5 = 5;
for (let i = height5; i >= 1; i--) {
  console.log('  '.repeat(height5 - i) + '* '.repeat(i));
}
console.log('\n');

// Вариант 6. Нижний левый прямоугольный треуольник
const height6 = 5;
for (let i = height6; i >= 1; i--) {
  console.log('* '.repeat(i));
}
console.log('\n');

// Вариант 7.1. Равнобедренный треугольник (вариант А)
const height7 = 5;
let counter2 = 0;
for (let i = height7; i > 0; i--) {
  counter2++;
  console.log(' '.repeat(i - 1) + '* '.repeat(counter2));
}
console.log('\n');

// Вариант 7.2. Равнобедренный треугольник (вариант Б)
const isoscelesTriangle = (height8) => {
  let charset = '';
  for (let i = 0; i < height8; i++) {
    for (let j = 1; j <= 2 * height8 - 1; j++) {
      if (j >= height8 - i && j <= height8 + i) {
        charset += '*';
      } else {
        charset += ' ';
      }
    }
    charset += '\n';
  }
  return charset;
};
console.log(isoscelesTriangle(5));

// 6. ПРОВЕРКА РАБОЧЕГО ВРЕМЕНИ
// Вариант 1 (Виктория)
const getTimePoint = (timeText) => {
  const [hour, minute] = timeText.split(':');
  return (Number(hour) * 60 + Number(minute));
};

const checkMeeting = (workStart, workEnd, meetingStart, duration) => {
  const workStartTime = getTimePoint(workStart);
  const workEndTime = getTimePoint(workEnd);
  const meetingStartTime = getTimePoint(meetingStart);
  const meetingEndTime = meetingStartTime + duration;

  return meetingStartTime >= workStartTime
      && meetingStartTime <= workEndTime
      && meetingEndTime >= workStartTime
      && meetingEndTime <= workEndTime;
};
console.log(checkMeeting('08:00', '14:30', '14:00', 90));

// Вариант 2 (ChatGPT)
function isMeetingWithinWorkday(workStart, workEnd, meetingStart, duration) {
  function parseTime(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }

  const workStartMinutes = parseTime(workStart);
  const workEndMinutes = parseTime(workEnd);
  const meetingStartMinutes = parseTime(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + duration;

  return workStartMinutes <= meetingStartMinutes && meetingEndMinutes <= workEndMinutes;
}
console.log(isMeetingWithinWorkday('08:00', '14:30', '14:00', 90));
