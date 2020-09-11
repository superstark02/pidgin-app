const functions = require('firebase-functions');
const app = require('express')()
const shortid = require('shortid')
const Razorpay = require('razorpay')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

const razorpay = new Razorpay({
	key_id: 'rzp_test_YkaGnE7ZDrAhTW',
	key_secret: 'u8MNcA7rewUxvZWVo612i0jt'
})
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
	functions.logger.info("Hello logs!", { structuredData: true });
	response.send("Hello from Firebase!");
});

app.post('/cart', async (req, res) => {
	const payment_capture = 1
	const amount = 499
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})


app.post('/we-support-teachers', async (req, res) => {
	const accountSid = 'ACd3d54f5a4421e13e7f3dd4cc3cd959df';
	const authToken = '8f9d524d2b157ee2507bb78382b0d836';
	const client = require('twilio')(accountSid, authToken);

	client.messages
		.create({
			from: 'whatsapp:+14155238886',
			body: 'Hello there!',
			to: 'whatsapp:+919910197196'
		})
		.then(message => console.log(message.sid));
})
