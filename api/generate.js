const qr = require('qr-image');

module.exports = (req, res) => {
    if (req.method === 'POST') {
        const url = req.body.url;
        const qr_svg = qr.imageSync(url, { type: 'png' });
        const qrCodeUrl = `data:image/png;base64,${qr_svg.toString('base64')}`;
        res.status(200).json({ qrCodeUrl, url });
    } else {
        res.status(405).send('Method Not Allowed');
    }
};