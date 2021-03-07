const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  let result = num1 + num2;

  res.send("The result of the calculator is " + result);

  res.send("thanks for posting");
});

app.get("/bmi-calc", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmi-calc", function (req, res) {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  let bmi = weight / (height * height);

  res.send("Your BMI is" + bmi);
});

app.listen(3000, function () {
  console.log("server is running on PORT 3000");
});
