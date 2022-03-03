// Get today's date.
const today = new Date();
const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('date').innerText = date;
});

// Generate QR code.
const qrText = `["A01759485@itesm.mx","A01759485","Runa Aiba null","${date}","verde","-","Alumno","Tec de Monterrey","Entrada"," - Invalid Date"]`;

const qrcode = new QRCode(document.getElementById('qr-to-generate-div'), {
	text: qrText,
	width: 256,
	height: 256,
	colorDark: '#067d07',
	colorLight: '#ffffff',
	correctLevel: 0 //QRCode.CorrectLevel.H
});
