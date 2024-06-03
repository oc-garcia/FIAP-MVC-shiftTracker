var User = require("../models/user.js");

exports.getAllApi = (req, res) => {
  User.getAll((err, users) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(users);
    }
  });
};

exports.getByIdApi = (req, res) => {
  User.getById(req.params.id, (err, user) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(user);
    }
  });
};

exports.createApi = (req, res) => {
  var { name, email } = req.body;
  var newUser = { name: name, email: email };
  User.create(newUser, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json(newUser);
    }
  });
};

exports.updateApi = (req, res) => {
  var updatedUser = { name: req.body.name, email: req.body.email };
  User.update(req.params.id, updatedUser, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(updatedUser);
    }
  });
};

exports.deleteApi = (req, res) => {
  User.delete(req.params.id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(204).send();
    }
  });
};
