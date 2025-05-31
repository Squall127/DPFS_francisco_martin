var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/users/profile');
});

router.get('/profile', function(req, res, next) {
  res.render('users/profile');
});

module.exports = router;
