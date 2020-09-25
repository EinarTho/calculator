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


// function routeHandler(req, res) {
//   const { url, method } = req;
//   console.log({ url });
//   const arabicToRoman = fs.readFileSync('./public/arabictoroman.html');
//   switch (true) {
//     case (url === '/' && method === 'GET'):
//       const homePage = fs.readFileSync('./public/index.html');
//       return res.end(homePage);

//     case (url === '/calculator' && method === 'GET'):
//       const calculatorPage = fs.readFileSync('./public/calculator.html');
//       return res.end(calculatorPage);

//     case (url === '/romantoarabic' && method === 'GET'):
//       const romanToArabic = fs.readFileSync('./public/romantoarabic.html');
//       return res.end(romanToArabic);

//     case (url === '/arabicToRoman' && method === 'GET'):
//       return res.end(arabicToRoman);

//     case (url.includes('/romantoarabic?')):
//       const expression = url.split('?')[1];
//       const answer = romanToArabic.romanToArabic(expression);
//       return res.end(JSON.stringify(answer));

//     case url.includes('/arabictoroman?'):
//       const arabExpression = url.split('?')[1];
//       const arabAnswer = arabicToRoman.arabicToRoman(expression);
//       return res.end(JSON.stringify(answer));
//       break;

//     case (url === '/calculator?'):
//       const numberExpression = url.split('?')[1];
//       const numberAnswer = calculator.evaluate(numberExpression);
//       return res.end(JSON.stringify(numberAnswer));
//     default:
//       res.writeHead(404, { 'Content-Type': 'text/plain' });
//       res.end();
//       break;
//   }
// }

module.exports.handler = routeHandler;
