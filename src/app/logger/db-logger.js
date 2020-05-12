const knex = require("knex");

const instance = knex({
  client: "pg",
  version: "7.2",
  connection: {
    host: "ec2-54-147-209-121.compute-1.amazonaws.com",
    user: "dzrpsovoxgunfe",
    password:
      "98d8a3564d06fecf6c7abae7b7083cabe31bad4e89e0498701b1035b8c3aae2c",
    database: "d5kqer1gp7h9ll",
    port: "5432",
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = instance;
