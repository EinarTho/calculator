const fs = require('fs');
const qs = require('querystring');

const calculator = require('./calculator');
const convert = require('./arabicHandler');

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
  if (url.includes('/calculator?')) {
    const expression = url.split('?')[1];
    const answ = calculator.evaluate(expression);
    // res.json({ answ });
    console.log(answ);
    return res.end(JSON.stringify(answ));
  }

  if (url === '/arabic' && method === 'GET') {
    const arabicPage = fs.readFileSync('./public/arabic.html');
    res.write(arabicPage);
    return res.end();
  }
  if (url === '/arabic' && method === 'POST') {
    const arabicDisplay = fs.readFileSync('./public/arabicDisplay.html');
    let body = [];
    req.on('data', chunk => {
      body.push(chunk);
    })
      .on('end', () => {
        body = Buffer.concat(body).toString();
        const { number } = qs.parse(body);
        const romanNumber = convert.toRoman(number);
        res.write(arabicDisplay);
        res.end(romanNumber);
      });
  }
  if (url === '/roman' && method === 'GET') {
    const romanPage = fs.readFileSync('./public/roman.html');
    res.write(romanPage);
    return res.end();
  }
  if (url === '/roman' && method === 'POST') {
    return res.end();
  }
}

module.exports.handler = routeHandler;
