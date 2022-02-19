const express = require('express');
const apiRouter = require('./routes/api');
const imagesRouter = require('./routes/images');
const fs = require('fs');
const res = require('express/lib/response');

const app = express();
const port = 80;

app.use('/api', apiRouter);
app.use('/images', imagesRouter);
app.use(express.static(__dirname + '/public'));

app.listen(port, (error) => console.log(error ? 'error' : 'server started'));
