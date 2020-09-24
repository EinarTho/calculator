// const routeCalc = require('./calculator/route-calculator');
const fs = require('fs');
const calculator = require('./calculator');

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
    return res.end(answ);
  }
}

module.exports.handler = routeHandler;
