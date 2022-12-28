import fs from "fs";
import path from "path";

const startDir = process.cwd();
const maxDepth = 5;

let found = false;
let depth = 0;
let cwd = startDir;
while (!found && depth < maxDepth) {
	const jestPath = path.join(cwd, "node_modules", "jest", "bin", "jest.js");
	if (fs.existsSync(jestPath)) {
		found = true;
		break;
	}
	depth++;
	cwd = path.join(cwd, "..");
}

if (!found) {
	throw new Error("Couldn't find Jest");
}

//run jest
import("file://" + path.join(cwd, "node_modules", "jest", "bin", "jest.js"));
