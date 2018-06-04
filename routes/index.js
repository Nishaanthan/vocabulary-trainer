var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Vocabulary trainer app' });
});
router.post('/',function(req, res){
  db.connect(function(err){
    var sql = "INSERT INTO words(original, translated, date_created) values(?,?,?)";
    var time = Data.now();
    db.query(sql,req.body.original,req.body.translated,time);
  })
})


module.exports = router;
