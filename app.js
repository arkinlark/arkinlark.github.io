const http = require('http');


const server = http.createServer(function(req, res) {
	res.write("OTW BEING A FULLSTACK ENGINEER")
	res.end()
})


server.listen(3000);

console.log("server started");
