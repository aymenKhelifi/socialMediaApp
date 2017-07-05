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
// app.use("/message", userRoutes);

app.post("/message", function(req,res){
  var message = req.body.message;
  console.log("MESSAGEGEEE:", message);
  console.log("REQ SESSION", req.session.userId);
  var newPost = models.post
    .build({
      post: message,
      // userId: req.session.userId,
      user: req.session.user
    })
    .save()
    .then(function(newMessage) {
      res.redirect("/profile");
    });
});

app.listen(port, function() {
  console.log(`Server is running on port ${port}.`);
});
