'use strict';
const express = require('express'),
    bodyParser = require('body-parser'),
    port = process.env.port || 3000,
    mainRoutes = require('./routes/main'),
    app = express();

// To process url encoded data
app.use(bodyParser.urlencoded({ extended: false }));
// To process json data
app.use(bodyParser.json());

mainRoutes(app);

app.listen(port, () => {
  console.log('Server started');
});
