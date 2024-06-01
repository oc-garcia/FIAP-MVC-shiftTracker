var db = require("../db/db.js");

exports.getAll = (callback) => {
  db.all("SELECT * FROM user", callback);
};

exports.getById = (id, callback) => {
  db.get("SELECT * FROM user WHERE id = ?", [id], callback);
};

exports.create = (user, callback) => {
  const { name, email } = user;
  db.run("INSERT INTO user (name, email) VALUES (?, ?)", [name, email], callback);
};

exports.update = (id, user, callback) => {
  const { name, email } = user;
  db.run("UPDATE user SET name = ?, email = ? WHERE id = ?", [name, email, id], callback);
};

exports.delete = (id, callback) => {
  db.run("DELETE FROM user WHERE id = ?", [id], callback);
};