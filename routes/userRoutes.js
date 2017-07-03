const express = require("express");
const userRoutes = express.Router();
const models = require("../models");


userRoutes.get("/", function(req, res) {
  models.user.findAll().then(function(foundUsers) {
    res.send(foundUsers);
  });
});
module.exports = userRoutes;