var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/profile', function (req, res, next) {
  User.findById(req.user._id).populate('orders').exec((err, user) => {
    if (err) return next(err);
    return res.render('pages/profile', {
      user
    });
  });
});

module.exports = router;