document.getElementById('qrForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('urlInput').value;

    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
    })
    .then(response => response.json())
    .then(data => {
        const qrResult = document.getElementById('qrResult');
        qrResult.innerHTML = `<img src="${data.qrCodeUrl}" alt="QR Code"><p>${data.url}</p>`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
