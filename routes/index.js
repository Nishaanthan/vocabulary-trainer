var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Vocabulary trainer app' });
});
router.post('/',function(req, res, next){
  console.log(req.body.original);
  console.log(req.body.translated);
})


module.exports = router;
