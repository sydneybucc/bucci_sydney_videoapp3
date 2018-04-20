var express = require('express');
var router = express.Router();
var config = require('../config');

// do some checking here => check the default user profile
// ternary statement => MDN ternary
//var toRender = (config.kidsmode) ? 'main_kids' : 'home';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("home", {
    title: 'Whats Up?',
    message : "handlebars is awesome",
    mainpage : true,
    kidsmode : config.kidsmode
  });
});


module.exports = router;
