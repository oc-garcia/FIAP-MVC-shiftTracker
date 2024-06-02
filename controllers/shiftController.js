var Shift = require("../models/shift.js");
var checkUserExists = require("../middleware/checkUserExists.js");

exports.getAll = (req, res) => {
  Shift.getAll((err, shifts) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.render("shift/allShift", { shifts: shifts });
    }
  });
};

exports.getById = (req, res) => {
  Shift.getById(req.params.id, (err, shift) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.render("shift/shift", { shift: shift });
    }
  });
};

exports.getByUserId = (req, res) => {
  Shift.getByUserId(req.params.userId, (err, shifts) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.render("shift/shiftByUser", { ...shifts });
    }
  });
};

exports.create = [
  checkUserExists,
  (req, res) => {
    var { userId, startTime, endTime } = req.body;
    var newShift = { userId: userId, startTime: startTime, endTime: endTime };

    Shift.create(newShift, (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.redirect("/shift");
      }
    });
  },
];

exports.update = [
  checkUserExists,
  (req, res) => {
    var { userId, startTime, endTime } = req.body;
    var updatedShift = { userId: userId, startTime: startTime, endTime: endTime };

    Shift.update(req.params.id, updatedShift, (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.redirect("/shift");
      }
    });
  },
];

exports.delete = (req, res) => {
  Shift.delete(req.params.id, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.redirect("/shift");
    }
  });
};

exports.createForm = (req, res) => {
  res.render("shift/form", { title: "Create Shift", url: "/shift", shift: {} });
};

exports.editForm = (req, res) => {
  console.log(req.params.id);
  Shift.getById(req.params.id, (err, shift) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      console.log(shift);
      res.render("shift/form", { title: "Edit Shift", url: `/shift/${shift.id}?_method=PATCH`, shift: shift });
    }
  });
};
