const router = require("express").Router();

console.log(process.env.ENV);

router.get("/api/projects", (req, res) =>{
    res.send({  });
});


module.exports = {
    router: router
};