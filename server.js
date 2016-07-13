var express = require('express');
var app = express();
var http = require('http');
var router = express.Router();
var path = require('path');
var ejs = require('ejs');
var dirreader = require('./libs/dirreader');
var root = require('./appConstants/rootConstant').ROOT;
var commentRepository = require('./repositories/commentRepository');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(root));

router.get('/', function (req, res) {
  dirreader('' ,function(err, fileArr, upPath) {
    res.render('index', {dataList: fileArr, backDirection: upPath});
  });
});

router.get('/getList', function(req, res) {
  dirreader(req.query.path, function(err, fileArr, upPath) {
    res.render('directorylist', {dataList: fileArr, backDirection: upPath});
  });
});

router.get('/getComments', function(req, res) {
  commentRepository.getComments(req.query.path, function (err, comments) {
    res.render('comments', {fileComments: comments});
  });
});

http.createServer(app).listen(3000);