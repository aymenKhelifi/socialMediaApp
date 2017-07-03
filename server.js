const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const models = require("./models");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const session = require("express-session");

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use("/", express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "Communism Vici Kimono",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 900000
    }
  })
);

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port, function() {
  console.log(`Server is running on port ${port}.`);
});
