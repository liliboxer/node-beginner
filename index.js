var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
hand["/"] = requestHandlers.start;
hand["/start"] = requestHandlers.start;
hand["/upload"] = requestHandlers.upload;

server.start(router.route, handle);