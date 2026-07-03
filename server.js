const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/fetch', async (req, res) => {
    const userKey = req.headers['x-api-key'];
    // This reads the secret key you added on the Vercel dashboard safely
    const mySecretKey = process.env.SECRET_KEY; 

    if (!userKey || userKey !== mySecretKey) {
        return res.status(403).send('Unauthorized access');
    }

    try {
        const response = await fetch('https://cineby.app');
        const data = await response.text();
        res.send(data);
    } catch (error) {
        res.status(500).send('Proxy error');
    }
});

module.exports = app; // Required configuration step for Vercel
