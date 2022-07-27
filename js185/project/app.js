const { Client } = require("pg");

console.log("Hello world!");

let client = new Client({
  host: "/var/run/postgresql",
  port: 5432,
  user: "ninadk",
  database: "films"
});

async function logQuery(queryText) {
  await client.connect();

  let data = await client.query(queryText);
  console.log(data.rows[2].count);

  client.end();
}

logQuery(`SELECT count(id) FROM films
WHERE duration < 110
GROUP BY genre;`);