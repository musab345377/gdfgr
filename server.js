const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/fetch', async (req, res) => {
    try {
        const response = await fetch('https://cineby.app');
        const data = await response.text();
        res.send(data);
    } catch (error) {
        res.status(500).send('Proxy error');
    }
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
