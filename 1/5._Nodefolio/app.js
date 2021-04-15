const express = require("express");
const app = express();

const fetch = require("node-fetch");

app.use(express.json());

app.use(express.static("public"));

const projectsRouter = require("./routes/projects");

app.use(projectsRouter.router);



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/");
});


//Port Listening

const PORT = process.env.PORT || 8080;

console.log(process.env.PORT);

const server = app.listen(PORT, (error) => {
    if(error){
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
})

