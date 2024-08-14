const express = require("express");
const jwt = require("jsonwebtoken");
const { add } = require("./add");
const { checkInDB } = require("./db");
const app = express();
const port = 5001;
// Secret key for signing JWT
const SECRET_KEY = "mohammed_gadi53";
// middlewares
app.use(express.json());

app.get("/chalu-haini", (req, res) => {
  //   res.send("jordar hai.");
  res.json({
    gaau: "Galiakot",
    naam: "Dhinanad Chauhan 1",
    kaam: "phapha",
    mhotoThyo: false,
    age: 32,
  });
});

app.get("/addNumbers", (req, res) => {
  const sumOfNumbers = add(5, 10);
  res.json({
    sumIs: sumOfNumbers,
  });
});

app.post("/plusKar", (req, res) => {
  const { num1, num2 } = req.body;
  const sumOfNumbers = add(num1, num2);
  res.json({
    sumIs: sumOfNumbers,
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const isValidUser = checkInDB(username, password);

  if (isValidUser) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
