var express = require("express");
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (res, res, next) {
		console.log("private route hit!");
		next();
	},
	logger: function (req, res, next) {
		console.log(req.method + " " + req.originalUrl + " " + new Date().toString());
		next();
	}
}


app.use(middleware.logger);

app.get("/about", middleware.requireAuthentication, function (req, res) {
	res.send("About Us");
})

app.use(express.static(__dirname + "/public"));



app.listen(PORT, function() {
	console.log("Node server started!");
});