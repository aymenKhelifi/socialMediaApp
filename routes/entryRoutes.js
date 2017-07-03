const express = require("express");
const entryRoutes = express.Router();

app.get("/", function(req, res) {
  res.render("index");
});


module.exports = entryRoutes;