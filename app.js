var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer  = require('multer');

var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// form仅支持单文件为file字段，更多使用，参考multer使用文档
app.use(multer().single('file'));

app.use([ '/*'], function(req, res, next) {
  console.info('*****************************req.originalUrl********************:',req.originalUrl);
  next();
}, router);
router.post('/', function (req, res, next) {
  console.info('/////////////////////////////////////');
  console.info('req.headers:',req.headers,'\r\nreq.body:',req.body, '\r\nreq.file:',req.file);
  console.info('/////////////////////////////////////');

  if (req.file) req.body.file = req.file.originalname;
  res.send(req.body);
});

router.get('/', function (req, res, next) {
  console.info('======================================');
  console.info('req.query:',req.query);
  console.info('======================================');

  res.send(req.query);
});

var server = app.listen(5555, function() {
  console.log('Express server listening on port ' + 5555);
});
