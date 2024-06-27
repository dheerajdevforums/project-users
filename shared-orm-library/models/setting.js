const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Setting = sequelize.define('Setting', {
  config_name: {
    type: DataTypes.STRING,
    allowNull: false,
    index: true,
  },
  config_value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Setting;