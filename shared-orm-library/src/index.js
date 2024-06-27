const { Sequelize } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
	host: process.env.DATABASE_HOST,
	dialect: process.env.DATABASE_DIALECT || "postgres",
	logging: process.env.DB_QUERY_LOG === "true" ? true : false,
});

const User = require("../models/user");
const Setting = require("../models/setting");

module.exports = {User, Setting, sequelize};
