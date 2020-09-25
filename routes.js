const fs = require('fs');
const calculator = require('./calculator');
const romanToArabic = require('./romanToArabic');
const arabicToRoman = require('./arabicToRoman');

function routeHandler(req, res) {
  const { url, method } = req;
  console.log({ url });
  if (url === '/' && method === 'GET') {
    const homePage = fs.readFileSync('./public/index.html');
    return res.end(homePage);
  }
  if (url === '/calculator' && method === 'GET') {
    const calculatorPage = fs.readFileSync('./public/calculator.html');
    return res.end(calculatorPage);
  }
  if (url === '/romantoarabic' && method === 'GET') {
    const calculatorPage = fs.readFileSync('./public/romantoarabic.html');
    return res.end(calculatorPage);
  }
  if (url === '/arabictoroman' && method === 'GET') {
    const calculatorPage = fs.readFileSync('./public/arabictoroman.html');
    return res.end(calculatorPage);
  }
  if (url.includes('/arabictoroman?') && method === 'GET') {
    const expression = url.split('?')[1];
    const answer = arabicToRoman.arabicToRoman(expression);
    return res.end(JSON.stringify(answer));
  }
  if (url.includes('/romantoarabic?') && method === 'GET') {
    const expression = url.split('?')[1];
    const answer = romanToArabic.romanToArabic(expression);
    return res.end(JSON.stringify(answer));
  }
  if (url.includes('/calculator?')) {
    const expression = url.split('?')[1];
    const answer = calculator.evaluate(expression);
    return res.end(JSON.stringify(answer));
  }
}

switch (true) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}

module.exports.handler = routeHandler;
