const express = require("express");
const app = express();

console.log(__dirname);

app.get("/", (req, res) => {
    // in node you have __dirname__
    // to serve an html file you have the res.sendFile method
    res.sendFile(__dirname + "/public/welcome.html");
})

app.get("/dragons", (req, res) => {
    res.sendFile(__dirname + "/public/dragons.html");
})

app.listen(8080, (error) => {
    if(error){
        console.log(error);
    }
    console.log("Server is running on port", 8080);
})