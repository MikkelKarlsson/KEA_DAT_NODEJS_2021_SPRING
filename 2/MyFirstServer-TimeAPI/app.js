const express = require("express");
const app = express();




app.get("/", (req, res) => {
    res.send({});
});

app.get("/time", (req, res) => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    res.send({
        time
    });
});

app.get("/day", (req, res) => {
    const today = new Date();
    const day = today.getDate();
    res.send({
        day
    });
});

app.get("/month", (req, res) => {
    const today = new Date();
    const month = today.getMonth() + 1;
    res.send({
        month
    });
});

//Just for funsies ^^
app.get("/currentDateAndTime", (req, res) => {
    const today = new Date();
    const date = today.getDate() +'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    const time = today.getHours() + "." + today.getMinutes() + "." + today.getSeconds();
    const dateTime = date+' '+time;
    res.send({
        dateTime
    });
});

app.listen(8080);