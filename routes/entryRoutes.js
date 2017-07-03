const express = require("express");
const entryRoutes = express.Router();


entryRoutes.get("/", function(req, res) {
  res.render("index");
});


module.exports = entryRoutes;