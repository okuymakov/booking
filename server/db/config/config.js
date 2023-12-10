require('dotenv').config(); // this is important!
module.exports = {
  "development": {
      "username": process.env.PG_USER,
      "password": process.env.PG_PASSWORD,
      "database": process.env.PG_DB,
      "host": process.env.PG_HOST,
      "dialect": "postgres"
  },
  "test": {
      "username": process.env.PG_USER,
      "password": process.env.PG_PASSWORD,
      "database": process.env.PG_DB,
      "host": process.env.PG_HOST,
      "dialect": "postgres"
  },
  "production": {
      "username": process.env.PG_USER,
      "password": process.env.PG_PASSWORD,
      "database": process.env.PG_DB,
      "host": process.env.PG_HOST,
      "dialect": "postgres"
  }
};
