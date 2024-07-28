const express = require('express');
const bodyParser = require('body-parser');
const qr = require('qr-image');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

app.post('/generate', (req, res) => {
    const url = req.body.url;
    const qr_svg = qr.imageSync(url, { type: 'png' });
    const qrCodeUrl = `data:image/png;base64,${qr_svg.toString('base64')}`;
    res.json({ qrCodeUrl, url });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
