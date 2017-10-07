var orm = require("../config/orm.js");

var cake = {
  all: function(cb) {
    orm.all("cakes", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("cakes", [
      "cakeName", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("cakes", {
      devoured: true
    }, condition, cb);
  }
};

// Export the database functions for the controller (cakeController.js).
module.exports = cake;