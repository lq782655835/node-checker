var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/', function(req, res) {
    res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
    res.send('About birds');
});
router.get('/mongo', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("runoob");
        // 查询
        dbo.collection("site"). find({"name":'菜鸟教程'}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            db.close();
            res.json(result)
        });
    });
})

module.exports = router;