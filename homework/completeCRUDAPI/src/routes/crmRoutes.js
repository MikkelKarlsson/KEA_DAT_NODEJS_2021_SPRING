const { createPool } = require("mysql");

const routes = (app, connection) => {
    app.route("/contact")

        .get((req, res, next) => {
            //This is called middleware
            console.log('Request from: ' + req.originalURL);
            console.log('Request from: ' + req.method);

            next();

        }, (req, res, next) => {

            // Select from mysql database and give rows as json result
            connection.query("SELECT * FROM contact", (err, rows, fields) => {
            console.log("Succesfully fetched all contacts");
            res.json(rows);
        })
        })

        .post((req, res, next) => {
        // middleware
        console.log('Request from: ' + req.originalUrl);
        console.log('Request from: ' + req.method);

        next();
        }, (req, res, next) => {

        const params = req.body
        // Select from mysql database and give rows as json result
            connection.query("INSERT INTO contact SET ?", params, (err, rows, fields) => {
            console.log("Succesfully created a contact");
            res.send('Contact with the name ' + params.firstname + ' ' + params.lastname + ' has been added.');
            })
        })

    app.route("/contact/:id")
        // Get contact by id
        .get((req, res) => {
        connection.query("SELECT * FROM contact WHERE id = ?", [req.params.id], (err, rows, fields) => {
            if(!err)
            res.send(rows);
            else
            console.log(err);
            })
        })

        // Delete contact by id
        .delete( (req, res) => {
        connection.query("DELETE FROM contact WHERE id = ?",[req.params.id],(err, rows, fields) => {
            if(!err)
            res.send("Deleted Succesfully");
            else
            console.log(err);
            })
        })

        // Update
        .put((req, res) => {
            console.log("connected as id " + req.params.id)
            let id = req.params.id
            const { firstname, lastname } = req.body

            connection.query("UPDATE contact SET firstname = ?, lastname = ? WHERE id = ?", [firstname, lastname, id] , (err) => {

                if(!err) {
                    res.send("Contact name has been changed to: " + firstname + " " + lastname)
                } else {
                    console.log(err);
                }
            })

            console.log(req.body);
        })
}

module.exports = routes