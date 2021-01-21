require("dotenv").config({path: `${__dirname}/.env`});
const nodeStatic = require("node-static");
const http = require("http");
const path = require("path");

const file = new(nodeStatic.Server)(path.join(__dirname, "dist"));

console.log("Starting Basic Server...");
console.log("Make sure you've run 'yarn build' to compile the server first");

http.createServer((req, res) => {
    file.serve(req, res);
}).listen(process.env.PORT);

console.log("Server Listening on Port 8080")
