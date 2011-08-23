var cluster = require('cluster')
  , php = require("../index").php
  , express = require('express')
  , options = require("./options")
  , http = require('http');

// setup:
//   $ npm install express -g
//   $ npm install cluster -g




var app = express.createServer().
use(php(options.phpConfig));



cluster(app).set('workers', 4).use(cluster.debug()).listen(3000);
console.log("http://"+options.appConfig.host+":"+options.appConfig.port+"/public/index.php");
