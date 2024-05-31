var db = require("../db/db.js");

exports.getAll = function (callback) {
  db.all("SELECT * FROM user", callback);
};

exports.getById = function (id, callback) {
  db.get("SELECT * FROM user WHERE id = ?", [id], callback);
};
