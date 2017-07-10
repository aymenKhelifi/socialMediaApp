const express = require("express");
const entryRoutes = express.Router();
const models = require("../models");


entryRoutes.get("/", (req, res)=>{
  res.render("home");
  console.log("REQ SESSION", req.session.userId);
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
      ],
      order: {
        createdAt: 'ASC'
      }
    })
    .then(function(posts) {
      if(req.session.userId !== undefined){
      res.render("index", { posts: posts, user: req.session });
      } else {
        res.redirect("/");
      }
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});

module.exports = entryRoutes;
