var config = require('../config');
var mysql = require('mysql');

var connect = mysql.createConnection({
  user: config.user,
  password: config.password,
  port: config.port,
  host: config.host,
  database: config.database
});

module.exports = connect;
