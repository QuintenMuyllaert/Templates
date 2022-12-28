console.log("Hello World!");

import { createServer } from "http";
import express from "express";
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

const server = createServer(app);

if (process.env.NODE_ENV !== "test") {
	server.listen(80);
}

export default server;
