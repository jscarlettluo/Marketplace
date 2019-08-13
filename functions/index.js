const functions = require('firebase-functions');

//initialize express app
const app = require('express')();

//import handlers
const { getAllListings, postOneListing } = require('./handlers/listings');
const { signup, login, imageUpload, addUserDetail, getUserInfo } = require('./handlers/users');

//import auth midware
const FBAuth = require('./util/fbAuth');

//get and post listing routes 
app.get('/listings', getAllListings);
app.post('/listing', FBAuth, postOneListing);

//users routes 
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, imageUpload);
app.post('/user', FBAuth, addUserDetail);
app.get('/user', FBAuth, getUserInfo);

exports.api = functions.https.onRequest(app); 

