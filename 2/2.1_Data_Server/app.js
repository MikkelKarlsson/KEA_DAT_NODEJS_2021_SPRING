const express = require("express");
const app = express();

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


app.listen(8080);