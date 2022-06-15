//create an express server , using assets from the Build folder
const express = require('express');

const app = express();

app.use(express.static('build'));

module.exports = app;