const express = require("express");
const app = express();
app.use('/assets/css', express.static(__dirname + '/assets/css'));

const fetch = require("node-fetch");



app.get("/proxy", (req, res) => {
    fetch("https://www.google.com")
        .then(res => res.text())
        .then(body => console.log(body));
})


app.get("/", (req, res) => {
    // in node you have __dirname__
    // to serve an html file you have the res.sendFile method
    res.sendFile(__dirname + "/public/welcome/welcome.html");
})

app.get("/dragons", (req, res) => {
    res.sendFile(__dirname + "/public/dragons/dragons.html");
})

app.get("/crypto", (req, res) => {
    res.sendFile(__dirname + "/public/crypto/crypto.html");
})


app.get("/potato", (req, res) => {
    if (req.query.value === "spud") {
        return res.send({ type: "petite potato" });
    }
    return res.send({ lifePhilosophy: "My life is potato. I have potato blood in my veins." });
});


const PORT = process.env.PORT || 8080;

console.log(process.env.PORT);

const server = app.listen(PORT, (error) => {
    if(error){
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
})

