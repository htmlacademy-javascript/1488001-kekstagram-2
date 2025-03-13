// ФУНКЦИЯ ДЛЯ ПРОВЕРКИ ДЛИНЫ СТРОКИ
// Вариант 1 (с if)
function checkStringLength1(string, stringMaxLength) {
  const str1 = string.toString();
  const stringLength = str1.length;
  if (stringLength <= stringMaxLength) {
    return true;
  }
  return false;
}
console.log(checkStringLength1('проверяемая строка', 20));
console.log(checkStringLength1('проверяемая строка', 18));
console.log(checkStringLength1('проверяемая строка', 10));
console.log('--ПРОВЕРКА ДЛИНЫ СТРОКИ ЗАВЕРШЕНА--');

// Вариант 2 (с тернарным оператором)
function checkStringLength2(string, stringMaxLength) {
  const str1 = string.toString();
  const stringLength = str1.length;
  return (stringLength <= stringMaxLength) ? true : false;
}
console.log(checkStringLength2('проверяемая строка', 20));
console.log(checkStringLength2('проверяемая строка', 18));
console.log(checkStringLength2('проверяемая строка', 10));
console.log('--ПРОВЕРКА ДЛИНЫ СТРОКИ ЗАВЕРШЕНА--');


// ФУНКЦИЯ ДЛЯ ПРОВЕРКИ ЯВЛЯВЕТСЯ ЛИ СТРОКА ПАЛИНДРОМОМ
// Вариант 1 (строка без пробелов)
function checkIfPalindrome1(string) {
  let reversedString = '';
  const strLowerCase = string.toString().toLowerCase();
  for (let index = strLowerCase.length - 1; index >= 0; index--) {
    reversedString += strLowerCase[index];
  }
  return (strLowerCase === reversedString) ? true : false;
}
console.log(checkIfPalindrome1('топот'));
console.log(checkIfPalindrome1('ДовОд'));
console.log(checkIfPalindrome1('Кекс'));
console.log('--ПРОВЕРКА СТРОКИ НА ПАЛИНДРОМ ЗАВЕРШЕНА--');

// Вариант 2 (строка с пробелами)
function checkIfPalindrome2(string) {
  let reversedString = '';
  const strLowerCaseWithoutSpaces = string.toString().toLowerCase().replaceAll(' ', '');
  for (let index = strLowerCaseWithoutSpaces.length - 1; index >= 0; index--) {
    reversedString += strLowerCaseWithoutSpaces[index];
  }
  return (strLowerCaseWithoutSpaces === reversedString) ? true : false;
}
console.log(checkIfPalindrome2('Лёша на полке клопа нашёл '));
console.log('--ПРОВЕРКА СТРОКИ НА ПАЛИНДРОМ ЗАВЕРШЕНА--');


// ФУНКЦИЯ ДЛЯ ИЗВЛЕЧЕНИЯ ЦИФР ИЗ СТРОКИ
// Вариант 1 (с использованием isFinite)
function extractNumbers1(string) {
  let resultingString = '';
  const str2 = string.toString();
  for (let index = 0; index < str2.length; index++) {
    if (isFinite(str2[index]) && str2[index] !== ' ' && str2[index] !== '-') {
      resultingString += str2[index];
    }
    continue;
  }
  return (isFinite(resultingString) && resultingString !== '') ? Number(resultingString) : 'Цифр от 0 до 9 не обнаружено';
}
console.log(extractNumbers1('2023 год'));
console.log(extractNumbers1('ECMAScript 2022'));
console.log(extractNumbers1('1 кефир, 0.5 батона'));
console.log(extractNumbers1('агент 007'));
console.log(extractNumbers1('а я томат'));
console.log(extractNumbers1(2023));
console.log(extractNumbers1(-1));
console.log(extractNumbers1(1.5));
console.log('--ИЗВЛЕЧЕНИЕ ЦИФР ЗАВЕРШЕНО--');

// Вариант 2 (с использованием Number.isNaN)
function extractNumbers2(string) {
  let resultingString = '';
  const str2 = string.toString();
  for (let index = 0; index < str2.length; index++) {
    if (Number.isNaN(parseInt(str2[index])) || str2[index] === ' ' || str2[index] === '-') {
      continue;
    }
    resultingString += str2[index];
  }
  return (resultingString !== '') ? Number(resultingString) : 'Цифр от 0 до 9 не обнаружено';
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
