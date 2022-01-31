const express = require("express");
const app = express();
const cookie_parser = require("cookie-parser");
const port = process.env.PORT || 3000;
const shortid = require('shortid')
const Razorpay = require('razorpay')
const mongoose = require("mongoose");
const crypto = require('crypto')
const path = require('path')
const fast2sms = require('fast-two-sms')
const cors = require('cors')
const User = require("./models/user");
const Car = require("./models/car");

require("dotenv").config();
const { auth, requiresAuth } = require("express-openid-connect");
app.use(express.json());
app.use(cookie_parser());
app.use(cors())

app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
  })
);

app.get("/", async (req, res) => {
  res.cookie("authtoken", req.oidc.isAuthenticated());
  if (req.oidc.isAuthenticated()) {
    const NewUser = new User({
      name: req.oidc.user.name,
      email: req.oidc.user.email,
      profilepicture: req.oidc.user.picture,
      username: req.oidc.user.nickname,
      email_verified: req.oidc.user.email_verified,
    });
    NewUser.save()
      .then(() => {
        console.log("user saved");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  res.redirect("http://localhost:3001");
});

app.get("/auth", async (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Authenticated" : "Not Authenticated");
});

// SMS 
async function SMS(req, res) {
 
  try {
      const {mobile_number, message} = (req.body)
      // console.log(JSON.stringify({ ...req.body }));
      var options = { authorization: process.env.SMS_API_KEY, message: message, numbers: [mobile_number] };
      const response = await fast2sms.sendMessage(options); //Asynchronous Function.
      res.send(response.message);
  } catch (err) {
      res.send("Failed to send SMS to the Client");
  }
}

app.post('/sendmessage', SMS, (req, res) => { });

// Razorpay
const razorpay = new Razorpay({
	key_id: 'rzp_test_Kb5Tzqts0BLbP2',
	key_secret: 't9DFCbpjOmUWoczLO9MErgqJ'
})

app.get('/logo.svg', (req, res) => {
	res.sendFile(path.join(__dirname + "/src/", 'logo.svg'))
})

app.post('/verification', (req, res) => {
	// do a validation
	const secret = '12345678'

	console.log(req.body)

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}
	res.json({ status: 'ok' })
})

app.post('/razorpay', async (req, res) => {
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
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount,
      mobile_number: response.contact,
      client_email: response.email,
      client_name: response.name,
		})
    // res.cookie("authtoken", req.oidc.isAuthenticated());
	} catch (error) {
		console.log(error)
	}
})

app.get("/searchCar", async (req, res) => {
  let { startDate, endDate } = req.query;
  console.log(startDate, endDate);
  Car.find(
    {
      start_date: { $lte: new Date(startDate) },
      end_date: { $gte: new Date(endDate) },
    },
    function (err, data) {
      if (err) {
        console.log(err);
        res.status(404).send("error");
      } else {
        console.log("First function call : ", data);
        res.render("./pages/Cars.js", { data: data });
      }
    }
  );
});

app.post("/addCar", async (req, res) => {
  console.log(req.body);
  const newCar = new Car({
    model_name: req.body.modelName,
    description: req.body.description,
    start_date: new Date(req.body.startDate),
    end_date: new Date(req.body.endDate),
    mileage: req.body.mileage,
    transmission: req.body.transmission,
    seats: req.body.seats,
    fuel_type: req.body.fuelType,
    abs: req.body.abs,
    car_photo: req.body.carPhoto,
  });
  newCar
    .save()
    .then(() => {
      console.log("car saved");
      res.status(200).send(newCar);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("error");
    });
});

app.get("/profile", requiresAuth(), async (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Error: " + err.message);
  });
