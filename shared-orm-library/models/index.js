const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = require("../../config/dbConfig");

const User = require('./user');
const Setting = require('./setting');

module.exports = sequelize;