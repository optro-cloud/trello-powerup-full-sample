require('dotenv').config({path: `${__dirname}/.env`});
import {IncomingMessage, ServerResponse} from 'http';
const nodeStatic = require('node-static');
const http = require('http');
const path = require('path');

const file = new(nodeStatic.Server)(path.join(__dirname, 'dist'));

console.log('Starting Basic Server...');
console.log("Make sure you've run 'yarn build' to compile the server first");

http.createServer((req: IncomingMessage, res: ServerResponse) => {
    file.serve(req, res);
}).listen(process.env.PORT || 3000);

console.log(`Server Listening on Port ${process.env.PORT || 3000}`)
