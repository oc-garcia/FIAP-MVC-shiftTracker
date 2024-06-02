var db = require("../db/db.js");

exports.getAll = (callback) => {
  db.all("SELECT * FROM shift", callback);
};

exports.getById = (id, callback) => {
  db.get("SELECT * FROM shift WHERE id = ?", [id], callback);
};

exports.getByUserId = (userId, callback) => {
  db.all("SELECT * FROM shift WHERE user_id = ?", [userId], callback);
};

exports.create = (shift, callback) => {
  const { userId, startTime, endTime } = shift;
  db.run("INSERT INTO shift (user_id, start_time, end_time) VALUES (?, ?, ?)", [userId, startTime, endTime], callback);
};

exports.update = (id, shift, callback) => {
  const { userId, startTime, endTime } = shift;
  db.run("UPDATE shift SET user_id = ?, start_time = ?, end_time = ? WHERE id = ?", [userId, startTime, endTime, id], callback);
};

exports.delete = (id, callback) => {
  db.run("DELETE FROM shift WHERE id = ?", [id], callback);
};