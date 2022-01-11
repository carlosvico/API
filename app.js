const express = require('express');
const bodyParser = require('body-parser')

const feedRoute = require('./routes/feeds');

const app = express();

app.use(bodyParser.json());


app.use('/feed',feedRoute);

app.listen(8080);