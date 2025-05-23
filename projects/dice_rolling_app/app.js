const HTTP = require("http");
const URL = require("url").URL;
const PORT = 3000;

function rollDie(max) {
  return Math.floor(Math.random() * max) + 1;
}

function getParams(path) {
  return new URL(path, `http://localhost:${PORT}`).searchParams;
}

function rollDice(params) {
  let [ rolls, sides ] = [Number(params.get("rolls")), Number(params.get("sides"))];
  let body = "";

  for (let roll = 1; roll <= rolls; roll += 1) {
    body += `${rollDie(sides)}\n`;
  }

  return body;
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  if (path === "/favicon.ico") {
    res.statusCode = 404;
    res.end();
  } else {
    let content = rollDice(getParams(path));

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write(`${content}`);
    res.write(`${method} ${path}`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
});