const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const models = require("./models");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const session = require("express-session");
const entryRoutes = require("./routes/entryRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

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

app.use("/", entryRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);


app.listen(port, function() {
  console.log(`Server is running on port ${port}.`);
});


// var newUser = models.user.build({
//   name: "Pants",
//   email: "Tommy@gmail.com",
//   password: "12345",
//   username: "tomyKisd324"
// });
// newUser.save().then(function(savedUser) {
//   console.log(savedUser);
// });



