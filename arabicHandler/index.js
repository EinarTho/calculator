const rawRomanNumber = (num, str) => {
  let updatedStr = str;
  switch (true) {
    case num >= 1000:
      updatedStr += 'M';
      return rawRomanNumber(num - 1000, updatedStr);
    case num >= 500:
      updatedStr += 'D';
      return rawRomanNumber(num - 500, updatedStr);
    case num >= 100:
      updatedStr += 'C';
      return rawRomanNumber(num - 100, updatedStr);
    case num >= 50:
      updatedStr += 'L';
      return rawRomanNumber(num - 50, updatedStr);
    case num >= 10:
      updatedStr += 'X';
      return rawRomanNumber(num - 10, updatedStr);
    case num >= 5:
      updatedStr += 'V';
      return rawRomanNumber(num - 5, updatedStr);
    case num <= 4 && num > 0:
      updatedStr += 'I';
      return rawRomanNumber(num - 1, updatedStr);
    default:
      break;
  }
  return updatedStr;
};

const refactor = stringToRefactor => {
  const romanLetters = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  let newStr = stringToRefactor.replace(/(I{4}|V{4}|X{4}|L{4}|C{4}|D{4}|M{4})/g, x => {
    const characterFourOf = x.charAt(0);
    const higherChar = romanLetters[romanLetters.indexOf(characterFourOf) - 1];
    return `${characterFourOf}${higherChar}`;
  });
  newStr = newStr.replace(/VIV/g, 'IX').replace(/LXL/g, 'XC').replace(/DCD/g, 'CM');
  return newStr;
};

const arabicToRoman = num => {
  const realNum = parseInt(num);
  const str = '';
  if (typeof (realNum) !== 'number' || realNum < 1 || realNum > 3000) {
    return 'Invalid input';
  }
  const rawRoman = rawRomanNumber(realNum, str);
  return refactor(rawRoman);
};

module.exports.toRoman = arabicToRoman;
