//run the server
import server from "../src/index";
const port = Math.floor(Math.random() * 10000) + 10000;
server.listen(port);

describe("Jest is running", () => {
	test("Is running", () => {
		expect(true).toBe(true);
	});
});

describe("Hello World", () => {
	test("GET: Hello World", async () => {
		const request = await fetch(`http://localhost:${port}/`);
		const response = await request.text();
		expect(response).toBe("Hello World!");
	});
});

afterAll(() => {
	server.close();
});
