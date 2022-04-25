const express = require("express");
const bodyParser = require("body-parser");
require('./db/conn');
const cors = require("cors");
const app = express();
// const model = require('./models/signup');
const model=require("./models/signup")


app.use(cors());
app.use(express.json());

app.set("PORT", process.env.PORT || 5000);



app.post("/Signup", async(req, res) => {
  console.log("request.body.firstName", req.body);
     let myData =new model(req.body);
  let result =await myData.save();
  console.log("result", result);
  res.send(result);
      //  .then(item => {
      //    console.log("items", item);
      //      //res.send("Name saved to database");
      //      res.send(req.body);
      //      console.log(req.body);
      // })
      // .catch(err => {
      //      res.status(400).send("Unable to save to database");
      // });
 });

app.get("/", async (req, resp) => {
     const products = await model.find();
     if (products.length > 0) {
       resp.send(products);
     } else {
       resp.send({ result: "No Product found" });
     }
   });



app.listen(app.get("PORT"), () =>
  console.log(`Server running on port ${app.get("PORT")}`)
);