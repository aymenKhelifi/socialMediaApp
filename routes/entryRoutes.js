const express = require("express");
const entryRoutes = express.Router();
const models = require("../models");


entryRoutes.get("/", (req, res)=>{
  res.render("home");
})

entryRoutes.get("/gabble", function(req, res) {
  models.post
    .findAll({
      include: [
        {
          model: models.user,
          as: "author"
        },
        {
          model: models.like,
          as: "likes"
        }
      ]
    })
    .then(function(posts) {
      console.log("REQ SESSIONNNNNNN", posts);
      res.render("index", { posts: posts, user: req.session });
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});

module.exports = entryRoutes;
