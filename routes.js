// const routeCalc = require('./calculator/route-calculator');
const fs = require('fs');
const calculator = require('./calculator');

function routeHandler(req, res) {
  const { url, method } = req;
  console.log({ url });
  if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const homePage = fs.readFileSync('./public/index.html');
    res.write(homePage);
    return res.end();
  }
  if (url === '/calculator' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const calculatorPage = fs.readFileSync('./public/calculator.html');
    res.write(calculatorPage);
    return res.end();
  }
  if (url.includes('/calculator?')) {
    const expression = url.split('?')[1];
    const answ = calculator.evaluate(expression);
    return res.end(JSON.stringify(answ));
  }
}

module.exports.handler = routeHandler;
