var User = require("../models/user.js");

exports.getAll = (req, res) => {
  User.getAll((err, users) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      console.log(users);
      res.render("user/user", { title: "Users", users: users });
    }
  });
};

exports.getById = (req, res) => {
  User.getById(req.params.id, (err, user) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.render("user/detail", { title: "User Detail", user: user });
    }
  });
};

exports.create = (req, res) => {
  var { name, email } = req.body;
  var newUser = { name: name, email: email };
  User.create(newUser, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.redirect("/user");
    }
  });
};

exports.new = (req, res) => {
  res.render("user/form", { title: "Create User", user: {}, url: "/user" });
};

exports.edit = (req, res) => {
  User.getById(req.params.id, (err, user) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.render("user/form", { title: "Edit User", user: user, url: `/user/${user.id}?_method=PATCH` });
    }
  });
};

exports.update = (req, res) => {
  var updatedUser = { name: req.body.name, email: req.body.email };
  User.update(req.params.id, updatedUser, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.redirect("/user");
    }
  });
};

exports.delete = (req, res) => {
  User.delete(req.params.id, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.redirect("/user");
    }
  });
};
