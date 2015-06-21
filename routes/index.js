var express = require('express');
var router = express.Router();
var server = require('http').Server(express);
var DeepstreamClient = require( 'deepstream.io-client-js' );
client = DeepstreamClient( '172.17.42.1:6021' )

client.login({ username: 'ds-example' }, function( success ){
  if( success ) {
    doIt();
  }
});

function doIt() {
  console.log("logged in");
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/docker-start', function(req, res) {
  res.send('success');
  //client.event.emit( 'docker', {
  console.log('something happened in docker');
})


module.exports = router;
