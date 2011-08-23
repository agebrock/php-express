var php = require("../index").php,
    options = require("./options"),
    express = require("express");

var app = express.createServer().
use(php(options.phpConfig)).
listen("3000");


console.log("http://"+options.appConfig.host+":"+options.appConfig.port+"/public/index.php");

