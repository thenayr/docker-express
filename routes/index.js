var express = require('express');
var router = express.Router();
var server = require('http').Server(express);
var DeepstreamClient = require( 'deepstream.io-client-js' );

//var io = require('socket.io');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/docker-start', function(req, res) {
  res.send('success');
  console.log('something happened in docker');
})


module.exports = router;
