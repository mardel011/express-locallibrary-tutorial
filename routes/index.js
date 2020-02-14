var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Hi Hi Hi' });
});

router.get('/wow/', function(req, res, next){
  res.send(`hi hello hi hello ${req.query.name}`);
});

module.exports = router;
