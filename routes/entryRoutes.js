const express = require("express");
const entryRoutes = express.Router();
const models = require("../models");


entryRoutes.get("/", function(req, res) {
  models.post
    .findAll()
    .then(function(posts) {
      console.log(":::::::", posts)
      res.render("index", { posts: posts });
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});

module.exports = entryRoutes;
