const numbers = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

const romanToArabic = str => {
  const check = RegExp(/[IVXLCDM]+/gi);
  if (typeof (str) !== 'string' || !check.test(str)) {
    return 'Invalid input';
  }
  let sum = 0;
  const upperCaseStr = str.toUpperCase();
  for (let i = 0; i < upperCaseStr.length; i++) {
    const number = numbers[upperCaseStr.charAt(i)];
    if (i === upperCaseStr.length - 1) {
      sum += number;
      break;
    }
    if (number < numbers[upperCaseStr.charAt(i + 1)]) {
      sum -= number;
    } else {
      sum += number;
    }
  }
  return sum;
};

module.exports.romanToArabic = romanToArabic;
