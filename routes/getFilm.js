var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

router.get('/:film', (req, res) => {
  connect.query(`SELECT * FROM tbl_movies where movies_id="${req.params.film}"`, (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result[0]);

      res.render('film', {
        title: 'results',
        message : "Welcome!",
        filmData : result[0]
      });
    }
  });
});
module.exports = router;