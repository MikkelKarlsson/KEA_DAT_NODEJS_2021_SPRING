//Installing web framework for Node.js
//Using this commando in the terminal 'npm install express --save'
//Also installing nodemon for faster use 'npm install -g nodemon'
const express = require("express");
const app = express();
app.use(express.json());

//download mysql 'npm install mysql'

//Connecting to database
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root", 
    password: "ascent12345",
    database: "nodejsdb",
})

//Calls crmRoutes
const routes = require("./src/routes/crmRoutes");
routes(app, connection);

connection.connect((err) => {
    if(!err){
        console.log("DATABASE CONNECTION SUCCESFUL");
    }else{
        console.log("ERROR COULD NOT CONNECT TO DATABASE: " + JSON.stringify(err, undefined, 2));
    }
})

// function
app.get("/message", function (req, res) {
    res.send({message: " This is my response 1"});
});

// Arrow - best practice
app.get("/message/test", (req, res) => {
    console.log(req.params.id + " This is my response 2");
});

app.listen(5454);