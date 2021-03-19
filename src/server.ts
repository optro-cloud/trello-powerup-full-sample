
import {IncomingMessage, ServerResponse} from 'http';
import * as nodeStatic from 'node-static';
import * as http from 'http';
import * as path from 'path';

const file = new(nodeStatic.Server)(path.join(__dirname, '..', 'dist'));

function validateEnvSetup() {
    const requiredEnv: string[] = ['PORT', 'POWERUP_NAME', 'POWERUP_ID', 'POWERUP_APP_KEY', 'CONTEXT_PATH'];
    const actualEnv: string[] = Object.keys(process.env);
    for(const env of requiredEnv) {
        if(!actualEnv.includes(env)) {
            console.error('You are missing Environmental Variables! Make sure you create a .env file or set these natively. Exiting.');
            for(const missingEnv of requiredEnv.filter(e => !actualEnv.includes(e))) {
                console.error(`Missing '${missingEnv}' variable`);
            }
            process.exit(1);
        }
    }
}

console.log('Checking Environmental Variables...');
validateEnvSetup();

console.log('Starting Basic Server...');
console.log("Make sure you've run 'yarn build' to compile the server first");

http.createServer((req: IncomingMessage, res: ServerResponse) => {
    file.serve(req, res);
}).listen(process.env.PORT);

console.log(`Server Listening on Port ${process.env.PORT}`);
