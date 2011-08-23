exports.phpConfig = {
	host: "127.0.0.1",
	port: "9000",
	root: require("path").normalize(__dirname + "/../"),
	keepAlive:true,
	php:{
	    SERVER_ADDR:"127.0.0.1",
	    SERVER_PORT:"80",
        SERVER_NAME:"localnode"
    }};
    
exports.appConfig = {
    port:"3000",
    host:"127.0.0.1"
}
