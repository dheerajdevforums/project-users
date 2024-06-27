require('dotenv').config();
const Sequelize = require("sequelize");
const sequelizeServer = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT || "postgres",
    logging: process.env.DB_QUERY_LOG === "true" ? true : false
  }
);

sequelizeServer
  .authenticate()
  .then(() => {
    console.log(
      "Connection has been established successfully to Assessment Database."
    );
  })
  .catch((error) => {
    console.error("Unable to connect to the Assessment database: ", error.message);
  });

module.exports = sequelizeServer;