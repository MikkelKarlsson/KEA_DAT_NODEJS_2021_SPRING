

const express = require("express");
const app = express();

const cat = require("./cat.json");

console.log(cat);

app.get("/cat", (req, res) => {
    
})

app.get("/querystring", (req, res) => {
    console.log(req.query);
    res.send({ query: req.query});
});

app.get("/pathvariable/:message/:title", (req, res) => {
    console.log(req.param);
    res.send({ message: req.params.message,
               title: req.params.title,
               rest: req.query });
});

app.post("/whatever", (req, res) => {
    console.log(req.body);
    res.send({ body: req.body })
});

if (undefined) {
    console.log("Getting to line 22");
}

app.listen(8080, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});