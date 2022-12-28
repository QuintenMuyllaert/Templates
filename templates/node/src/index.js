console.log("Hello World!");

const http = require("http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

const server = http.createServer(app);

if (process.env.NODE_ENV !== "test") {
	server.listen(80);
}

module.exports = server;
