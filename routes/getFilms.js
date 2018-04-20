var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  connect.query('SELECT * FROM tbl_movies', (err, result) => {
    console.log('from selecting movies');
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);

     res.render('films', {
         title: 'Parent Films',
         message : "Welcome!",
         filmData : result
       });
    }
  });
});

router.get('/kids', (req, res) => {
  connect.query('SELECT * FROM tbl_movies WHERE movies_kids=1', (err, result) => {
    console.log('from selecting movies');
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);

     res.render('films', {
         title: 'Kid Films',
         message : "Welcome!",
         filmData : result
       });
    }
  });
});
module.exports = router;
