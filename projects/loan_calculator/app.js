const HTTP = require("http");
const URL = require("url").URL;
const HANDLEBARS = require("handlebars");
const ROUTER = require("router");
const FINALHANDLER = require("finalhandler");
const SERVESTATIC = require("serve-static");
const PORT = 3000;
const APR = 5;
const MIME_TYPES = {
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

const LOAN_OFFER_SOURCE = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
    <link rel="stylesheet" href="/assets/css/styles.css">
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>
          <tr>
            <th>Amount:</th>
            <td>
              <a href='/loan-offer?amount={{amountDecrement}}&duration={{duration}}'>- $100</a>
            </td>
            <td>$ {{amount}}</td>
            <td>
              <a href='/loan-offer?amount={{amountIncrement}}&duration={{duration}}'>+ $100</a>
            </td>
          </tr>
          <tr>
            <th>Duration:</th>
            <td>
              <a href='/loan-offer?amount={{amount}}&duration={{durationDecrement}}'>- 1 year</a>
            </td>
            <td>{{duration}} years</td>
            <td>
              <a href='/loan-offer?amount={{amount}}&duration={{durationIncrement}}'>+ 1 year</a>
            </td>
          </tr>
          <tr>
            <th>APR:</th>
            <td colspan='3'>{{apr}}%</td>
          </tr>
          <tr>
            <th>Monthly payment:</th>
            <td colspan='3'>$ {{payment}}</td>
          </tr>
        </tbody>
      </table>
    </article>
  </body>
</html>
`;

const FORM_SOURCE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
    <link rel="stylesheet" href="/assets/css/styles.css">
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <form action="/loan-offer" method="post">
        <p>All loans are offered at an APR of {{apr}}%.</p>
        <label for="amount">How much do you want to borrow (in dollars)?</label>
        <input type="number" name="amount" value="">
        <label for="amount">How much time do you want to pay back your loan?</label>
        <input type="number" name="duration" value="">
        <input type="submit" name="" value="Get loan offer!">
      </form>
    </article>
  </body>
</html>`;

const FORM_TEMPLATE = HANDLEBARS.compile(FORM_SOURCE);
const LOAN_OFFER_TEMPLATE = HANDLEBARS.compile(LOAN_OFFER_SOURCE);

function render(template, data) {
  let html = template(data);
  return html;
}

function parseFormData(request, callback) {
  let body = "";
  request.on("data", chunk => {
    body += chunk.toString();
  });

  request.on("end", () => {
    let params = new URLSearchParams(body);
    let data = {
      amount: Number(params.get("amount")),
      duration: Number(params.get("duration"))
    };

    callback(data);
  });
}

function getPathname(path) {
  return new URL(path, `http://localhost:${PORT}`).pathname;
}

function getParams(path) {
  const url = new URL(path, `http://localhost:${PORT}`);
  let searchParams = url.searchParams;
  let data = {};
  data.amount = Number(searchParams.get("amount"));
  data.duration = Number(searchParams.get("duration"));

  return data;
}

function monthlyPayment(totalLoan, duration) {
  let monthlyIntRate = (APR / 100) / 12;
  let durationInMonths = duration * 12;
  let payment = totalLoan * (monthlyIntRate /
    (1 - Math.pow((1 + monthlyIntRate), (-durationInMonths))))
    .toFixed(2);

  return payment || 0;
}

function createLoanOffer(data) {
  data.amountIncrement = data.amount + 100;
  data.amountDecrement = data.amount - 100;
  data.durationIncrement = data.duration + 1;
  data.durationDecrement = data.duration - 1;
  data.apr = APR; // possibly unnecessary
  data.payment = monthlyPayment(data.amount, data.duration);

  return data;
}

let router = ROUTER();
router.use(SERVESTATIC("public"));

router.get("/", function(req, res) {
  let content = render(FORM_TEMPLATE, {apr: APR});

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write(`${content}\n`);
  res.end();
});

router.get("/loan-offer", function(req, res) {
  let data = createLoanOffer(getParams(req.url));
  let content = render(LOAN_OFFER_TEMPLATE, data);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write(`${content}\n`);
  res.end();
});

router.post("/loan-offer", function(req, res) {
  parseFormData(req, parsedData => {
    let data = createLoanOffer(parsedData);
    let content = render(LOAN_OFFER_TEMPLATE, data);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(`${content}\n`);
    res.end();
  });
});

router.get("*", function(req, res){
  res.statusCode = 404;
  res.end();
});

const SERVER = HTTP.createServer((req, res) => {
  router(req, res, FINALHANDLER(req, res));
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});