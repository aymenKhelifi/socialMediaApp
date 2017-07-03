const express = require("express");
const authRoutes = express.Router();

authRoutes.get("/", function(req, res){
    res.render("signup")
});

module.exports = authRoutes;