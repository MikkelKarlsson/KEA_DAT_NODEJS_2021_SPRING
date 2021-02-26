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
    const arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dateObj = new Date()
    const weekdayNumber = dateObj.getDay()
    const weekdayName = arrayOfWeekdays[weekdayNumber]
    res.send({
        weekdayNumber,
        weekdayName
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

app.get("/about", (req, res) => {
    res.send({

    });
});

app.listen(8080);