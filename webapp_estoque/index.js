const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const db = require('./src/db');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('view', __dirname + './src/views');


