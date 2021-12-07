const express = require("express");
const app = express();
const cookie_parser = require("cookie-parser");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const User = require("./models/user");
const Car = require("./models/car");

require("dotenv").config();
const { auth, requiresAuth } = require("express-openid-connect");
app.use(express.json());
app.use(cookie_parser());
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
