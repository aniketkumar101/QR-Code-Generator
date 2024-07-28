const qr = require('qr-image');

exports.handler = async (event, context) => {
  try {
    const url = event.queryStringParameters.url;
    if (!url) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "URL parameter is required" }),
      };
    }

    const qr_svg = qr.imageSync(url, { type: 'png' });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/png',
      },
      body: qr_svg.toString('base64'),
      isBase64Encoded: true,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
netlify.toml