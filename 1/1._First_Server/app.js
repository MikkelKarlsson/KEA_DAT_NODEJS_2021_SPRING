const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({});
});

// <h1>Welcome</h1>
app.get("/welcome", () => {
    res.send("<h1>Welcome</h1>")
});

app.get("/me", (request, response) => {​​​​​
    response.send({​​​​​"name": "mikkel", "age": "21", "school": "kea"}​​​​​);
    }​​​​​);

app.listen(8080);