// server.js
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
// server:
app.listen(port, function () {
    'use strict';
    console.log('Server is running on port: ' + port);
});

// routes
app.get('/', function (req, res) {
    'use strict';
    res.send('hi there.');
});