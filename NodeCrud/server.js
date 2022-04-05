var express = require("express");
var app = express();
var port = 5000;
const cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

require('./db/conn');
const model = require('./db/model');
// const { find } = require("./db/model");
// const { json } = require("express/lib/response");


app.get("/", async(req, res) => {
    //res.sendFile(__dirname + "/index.html");
    let result = await model.find();
    console.log(result);
    result = await JSON.stringify(result);
    console.log(result);
    console.log(result._id);
    console.log(result.firstName);
    res.send(result);
});

app.post("/addname", (req, res) => {
    var myData = new model(req.body);
    myData.save()
     .then(item => {
          res.send("Name saved to database");
          res.send(req.body);
          console.log(req.body);
     })
     .catch(err => {
          res.status(400).send("Unable to save to database");
     });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
