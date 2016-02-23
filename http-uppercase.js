var http = require('http');
var fs = require('fs');
var map = require('through2-map');  

var port = process.argv[2];


uc = map(function(chunk) {
  return chunk.toString().toUpperCase();
});


var server = http.createServer(function(req, res) {
	if (req.method != 'POST')  
         return res.end('send me a POST please.\n') 

    req.pipe(uc).pipe(res);

});  
server.listen(port); 