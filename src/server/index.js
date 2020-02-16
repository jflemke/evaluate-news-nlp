const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');
const aylien = require('aylien_textapi');
const mockAPIResponse = require('./mockAPI.js');

// set aylien API credentials
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
const port = 8080;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

app.post('/text/sentiment', function (req, res) {
    const reqJSON = req.body;

    textapi.sentiment({
        url: reqJSON.url,
        mode: 'document'
    }, function(error, response) {
        if (error === null) {
            res.send(response);
        } else {
            console.log('An Error occured! O-M-G!!! Run, Forrest!');
            console.log(error);
        }
    });
});
