const client = require("mongodb").MongoClient;
const url = "mongodb://";
const dbname = "movies"

client.connect(url, {useUnifiedTopology: true}, (error, cleint) => {
    if (error) {
        throw error;
    }

    const db = client.db(dbname);
    const actor = db.collection("actors");

    actors.find({}).toArray((error, data) => {
        console.log(data);
        client.close();
    });

});