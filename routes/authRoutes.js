const express = require("express");
const authRoutes = express.Router();
const bodyParser = require("body-parser");
const models = require("../models");
var loginAttempts = 0;

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
      if (loginAttempts >= 2) {
        loginAttempts = 0
        return res.render("fail");
      }
      if (foundUser[0] !== undefined) {
        if (foundUser[0].password == loginInfo.password) {
          req.session.user = loginInfo.username;
          req.session.userId = foundUser[0].id;
          loginAttempts = 0;
          return res.redirect("../users/profile");
        }
      }
      if (
        foundUser[0] !== undefined &&
        foundUser[0].password !== loginInfo.password
      ) {
        loginAttempts += 1;
        return res.render("login", {
          errorMessage: "Your Password is incorrect"
        });
      } else if (foundUser[0] === undefined) {
        loginAttempts += 1;
        return res.render("login", {
          errorMessage: loginInfo.username + " does not exist"
        });
      }
    });
});

module.exports = authRoutes;
