var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    var db = req.mongodb;
    var collection = db.get('userlistcollection');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;