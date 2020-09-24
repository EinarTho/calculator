function evaluate(str) {
  const pattern = RegExp(/^\s*[-]?\s*[0-9]+\s*[+-/*]\s*-?\s*[0-9]+\s*$/gm);
  if (!pattern.test(str)) {
    return 'invalidinput';
  }
  const expression = str.trim();
  let operator = '';
  let first = '';
  let last = '';
  for (let i = 0; i < expression.length; i += 1) {
    if ('-+/*'.includes(expression.charAt(i)) && i > 0) {
      operator = expression.charAt(i);
      first = expression.substring(0, i);
      last = expression.substring(i + 1);
      break;
    }
  }
  const num1 = parseInt(first, 10);
  const num2 = parseInt(last, 10);

  switch (operator) {
    case '+':
      return (num1 + num2).toString();
    case '-':
      return (num1 - num2).toString();
    case '*':
      return (num1 * num2).toString();
    case '/':
      if (num2 === 0) {
        return 'Not possibly dumbass';
      }
      return (num1 / num2).toString();
    default:
      throw new Error('Wrong operator');
  }
}
module.exports.evaluate = evaluate;
