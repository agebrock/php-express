var http = require("http");
var php = require("./lib/php-agent");
var urlp = require("url");
var path = require("path");
var express = require("express");

var app = express.createServer();

var options = {
	host: "127.0.0.1",
	port: "9000",
	root: __dirname + "/",
	server: {
		host: "127.0.0.1",
		port: 3005
	}
};

var agent = new php.Agent(4, options);

app.use(function (req, res, next) {
	var url = urlp.parse(req.url);
	var ext = path.extname(url.pathname);
	if(ext === ".php") {
        agent.request(req,res,next);

	}else{
        res.end()
	}
}).listen(options.server.port, options.server.host);
console.log("http://"+options.server.host+":"+options.server.port+"/public/index.php");


