var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cake = require("../models/cake.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/cake");
});

router.get("/cake", function(req, res) {
  cake.all(function(cakeData) {
    res.render("index", { cake_data: cakeData });
  });
});


router.post("/cake/create", function(req, res) {
  cake.create(req.body.cakeName, function(result) {
    res.redirect("/");
  });
});

router.put("/cake/update", function(req, res) {
  cake.update(req.body.cake_id, function(result) {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;