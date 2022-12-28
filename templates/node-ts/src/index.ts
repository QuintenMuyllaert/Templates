console.log("Hello World!");

import type { Request, Response } from "express";

const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});

app.get("boop", (req: Request, res: Response) => {
	res.send("Hello World!");
});

const server = http.createServer(app);

if (process.env.NODE_ENV !== "test") {
	server.listen(80);
}

module.exports = server;
