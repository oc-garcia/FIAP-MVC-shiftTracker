var User = require("../models/user.js");

exports.getAll = function (req, res) {
  User.getAll((err, user) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(user);
    }
  });
};

exports.getById = function (req, res) {
  User.getById(req.params.id, (err, user) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(user);
    }
  });
};
