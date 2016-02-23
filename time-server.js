var net = require('net');
var port = process.argv[2];
var strftime = require('strftime')

var server = net.createServer(function (socket) {
	var now = new Date();
	socket.end(strftime('%Y-%m-%d %H:%M\n', now));
});  
server.listen(port);  