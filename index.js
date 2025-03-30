const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

let qrCodeData = null;
let isReady = false;

client.on('qr', (qr) => {
    qrcode.toDataURL(qr, (err, url) => {
        qrCodeData = url;
    });
});

client.on('ready', () => {
    isReady = true;
    console.log('Client is ready!');
});

client.initialize();

app.get('/qr', (req, res) => {
    if (qrCodeData) {
        res.send(`<img src="${qrCodeData}" />`);
    } else {
        res.send('QR Code not available');
    }
});

app.post('/send', async (req, res) => {
    if (!isReady) {
        return res.status(400).send('Client not ready');
    }

    const { number, message } = req.body;

    try {
        const chatId = number.includes('@c.us') ? number : `${number}@c.us`;
        await client.sendMessage(chatId, message);
        res.send('Message sent');
    } catch (error) {
        res.status(500).send('Error sending message');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});