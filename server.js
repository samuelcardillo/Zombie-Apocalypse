const HOST_PORT = 3000
const PUBLIC_DIR = "./public"
var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, PUBLIC_DIR);
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(HOST_PORT);

console.log("Serving on http://localhost:" + HOST_PORT);
