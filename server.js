const express = require("express");
const app = express();
const cookie_parser = require('cookie-parser');
const port = process.env.PORT || 3000;
// var store = require('store')

require('dotenv').config();
const {auth, requiresAuth} = require('express-openid-connect')

app.use(cookie_parser());
app.use(
  auth({
    authRequired:false,
    auth0Logout:true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL:process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
  })
);

app.get("/", (req, res) => {
    // store.set('authtoken', req.oidc.isAuthenticated())
    res.cookie('authtoken',req.oidc.isAuthenticated());
    // localStorage().setItem('authtoken', req.oidc.isAuthenticated());
    res.redirect('http://localhost:3001')
});

app.get("/auth", (req, res) => {
    res.send(req.oidc.isAuthenticated() ? "Authenticated" : "Not Authenticated");
});
app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})