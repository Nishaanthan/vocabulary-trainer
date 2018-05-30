var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Vocabulary trainer app' });
});
router.post('/',function(req, res){
  
})


module.exports = router;
