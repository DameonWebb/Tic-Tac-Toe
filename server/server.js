//create an express server and tell it to use assets from the build folder
const express = require('express');

const app = express();

app.use(express.static('build'));

module.exports = app;