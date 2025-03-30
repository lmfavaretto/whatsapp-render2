const { Client } = require('whatsapp-web.js');

const client = new Client({
    puppeteer: {
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH
    }
});

client.on('qr', qr => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();