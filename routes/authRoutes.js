const express = require("express");
const authRoutes = express.Router();
const bodyParser = require("body-parser");
const models = require("../models");

authRoutes.get("/signup", function(req, res) {
  res.render("signup");
});

authRoutes.get("/login", function(req, res) {
  res.render("login");
});

authRoutes.post("/signup", function(req, res) {
  var userInfo = req.body;
  console.log("USER INFO:", req.body);
  var newUser = models.user
    .build({
      name: userInfo.name,
      username: userInfo.username,
      email: userInfo.email,
      password: userInfo.password,
      bio: userInfo.bio
    })
    .save()
    .then(function(savedUser) {
      res.redirect("/auth/login");
    });
});

authRoutes.post("/login", function(req, res) {
  var loginInfo = req.body;
  var dbUsername = models.user
    .findAll({ where: { username: loginInfo.username } })
    .then(function(foundUser) {
      if (foundUser[0] !== undefined) {
        if (foundUser[0].password == loginInfo.password) {
          req.session.user = loginInfo.username;
          req.session.userId = foundUser[0].id;
          return res.redirect("../users/profile");
        }
      } else {
        return res.render("fail");
      }
    });
});

module.exports = authRoutes;
