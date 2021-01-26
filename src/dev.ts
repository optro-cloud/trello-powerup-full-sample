const dotenv = require("dotenv");
dotenv.config();
const ngrok = require("ngrok");
const nodemon = require("nodemon");

function getCurrentTime(): string {
    const now = new Date();
    const hours = `${now.getHours() < 10 ? "0" : ""}${now.getHours()}`;
    const mins = `${now.getMinutes() < 10 ? "0" : ""}${now.getMinutes()}`;
    return `${hours}:${mins}`;
}

console.log(`⏰ ${getCurrentTime()} Creating a tunnel with ngrok for localhost:${process.env.PORT}...`);
ngrok.connect({port: process.env.PORT}).then((tunnelUrl: string) => {
    console.log(`✔ ${getCurrentTime()} ${process.env.POWERUP_NAME} tunnel created via ${tunnelUrl}`);
    console.log(`⚠ ${getCurrentTime()} Don't forget to update your Power-up URL at https://trello.com/power-ups/${process.env.POWERUP_ID}/edit`);

    // Use nodemon to watch for changes to the server-side code
    nodemon({
        exec: `node_modules/.bin/webpack serve --config webpack.config.js --env POWERUP_URL=${tunnelUrl} --mode=development --open`,
        ignore: ["src/**/*.spec.ts", "dev.ts"]
    });

    // Stop ngrok on kill
    nodemon.on("quit", async () => {
        console.log(`⚠ ${getCurrentTime()} Stopping ngrok tunnel...`);
        await ngrok.kill();
    }).on("unhandledRejection", (error: any) => {
        console.log(`⚠ ${getCurrentTime()} Unhandled Exception`, error);
    });
});
