var express = require('express');
var router = express.Router();
var config = require('../config');
var videoController = require('../controllers/videoAppController');

// do some checking here => check the default user profile
// ternary statement => MDN ternary
//var toRender = (config.kidsmode) ? 'main_kids' : 'home';

/* GET home page. */
router.get('/', videoController.get_all_movies);

router.get('/movies/:id/:movie', videoController.get_one_movie );

router.post('/api', videoController.post_new_review);

module.exports = router;
