const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to financial application." });
});

require("./app/controllers/transaction.controller.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
