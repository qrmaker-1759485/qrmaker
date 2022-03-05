// Get today's date.
const today = new Date();
const startDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

// Get the end date (a month later).
let endDay = new Date(today.getTime() + 31 * 24 * 60 * 60 * 1000);
const endDate = `${endDay.getDate()}/${endDay.getMonth() + 1}/${endDay.getFullYear()}`;

document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('date').innerText = `${startDate} - ${endDate}`;
});

// Generate QR code.
const qrText = `["A01759485@itesm.mx","A01759485","Runa Aiba null","${startDate}","verde","-","Alumno","Tec de Monterrey","Entrada"," - ${endDate}"]`;

const qr = new QRious({
	background: '#ffffff',
	backgroundAlpha: 0.0,
	foreground: '#067d07',
	foregroundAlpha: 1.0,
	level: 'M', //'H',
	padding: 0,
	size: 245,
	element: document.getElementById('qr-to-generate-div'),
	value: qrText
});

