import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({path: path.join(__dirname, '..', '.env')});
import * as ngrok from 'ngrok';
import * as nodemon from 'nodemon';

function getCurrentTime(): string {
    const now = new Date();
    const hours = `${now.getHours() < 10 ? '0' : ''}${now.getHours()}`;
    const mins = `${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
    return `${hours}:${mins}`;
}

function validateEnvSetup() {
    const requiredEnv: string[] = ['PORT', 'POWERUP_NAME', 'POWERUP_ID', 'POWERUP_APP_KEY', 'CONTEXT_PATH'];
    const actualEnv: string[] = Object.keys(process.env);
    for(const env of requiredEnv) {
        if(!actualEnv.includes(env)) {
            console.error('You are missing Environmental Variables! Make sure you create a .env file. Exiting.');
            console.error('To retry, navigate to the Power-Up root directory and run `yarn watch`.');
            process.exit(1);
        }
    }
}

console.log(`⏰ ${getCurrentTime()} Checking Environmental Variables`);
validateEnvSetup();

console.log(`⏰ ${getCurrentTime()} Creating a tunnel with ngrok for localhost:${process.env.PORT}...`);
ngrok.connect({port: process.env.PORT || 3000}).then((tunnelUrl: string) => {
    console.log(`✔ ${getCurrentTime()} ${process.env.POWERUP_NAME} tunnel created via ${tunnelUrl}`);
    const managementUrl = process.env.POWERUP_ID === 'UNSPECIFIED' ? 'https://trello.com/power-ups/admin' : `https://trello.com/power-ups/${process.env.POWERUP_ID}/edit`;
    console.log(`⚠ ${getCurrentTime()} Don't forget to update your iFrame Connector URL at ${managementUrl}`);

    // Use nodemon to watch for changes to the server-side code
    nodemon({
        exec: `node_modules/.bin/webpack serve --config webpack.config.ts --env POWERUP_URL=${tunnelUrl} --mode=development`,
        ignore: ['src/**/*.spec.ts', 'dev-watch.ts']
    });

    // Stop ngrok on kill
    nodemon.on('quit', async () => {
        console.log(`⚠ ${getCurrentTime()} Stopping ngrok tunnel...`);
        await ngrok.kill();
    }).on('unhandledRejection', (error: any) => {
        console.log(`⚠ ${getCurrentTime()} Unhandled Exception`, error);
        console.log('To retry, navigate to the Power-Up root directory and run `yarn watch`.');
    });
});
