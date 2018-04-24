const config = require('../config');
const mysql = require('mysql');

var connect = mysql.createPool({
  user: config.user,
  password: config.password,
  port: config.port,
  host: config.host,
  database: config.database
});

// console.log("from connect");

module.exports = connect;
