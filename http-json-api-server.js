var http = require('http');
var url = require('url');
var port = process.argv[2];

var routes = {
  "/api/parsetime": function(parsedUrl) {
    d = new Date(parsedUrl.query.iso);
    return {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
  },
  "/api/unixtime": function(parsedUrl) {
    return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
  }
}

var server = http.createServer(function(req, res) {

	parsedUrl = url.parse(req.url, true);
	resource = routes[parsedUrl.pathname];

	if (resource) {
	    res.writeHead(200, {"Content-Type": "application/json"});
	    res.end(JSON.stringify(resource(parsedUrl)));
	} else {
		res.writeHead(404);
		res.end();
	}
	

});  
server.listen(port); 