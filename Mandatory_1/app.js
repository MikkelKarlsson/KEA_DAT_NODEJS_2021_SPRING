    // Importing Express
const express = require('express');

    // Instantiate Express
const app = express();

    //Path
const path = require('path');

    //Define port
const port = 8080;

app.use(express.static("www"));

    // All API's served to the html pages
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/index.html'));
});

app.get('/api', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/api.html'));
});

app.get('/codesnippets', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/codesnippets.html'));
});

app.get('/terminal', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/terminal.html'));
});

app.get('/theory', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/theory.html'));
});

app.get('/tools', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/tools.html'));
});

app.get('/express', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/express.html'));
});

app.get('/nodejs', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/nodejs.html'));
});

app.get('/nodemon', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/nodemon.html'));
});

app.get('/mysql', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/mysql.html'));
});

    //Listenen to the port
app.listen(port, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("Server is running on port", port);
});
