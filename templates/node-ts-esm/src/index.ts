console.log("Hello World!");

import { createServer } from "http";
import express, { Application, Request, Response } from "express";
const app: Application = express();

app.get("/", (_req: Request, res: Response) => {
	res.send("Hello World!");
});

const server = createServer(app);

if (process.env.NODE_ENV !== "test") {
	server.listen(80);
}

export default server;
