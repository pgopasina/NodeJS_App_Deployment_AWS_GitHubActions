var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Prudhvi" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});

app.get('/ready', function (req, res) {
    res.send('{ "response": "Great!, It works!" }');
});

app.listen(port, () => {
    console.log('App is running successfully on port: ' + port);
});

module.exports = app;
