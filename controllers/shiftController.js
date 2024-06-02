var Shift = require("../models/shift.js");
var User = require("../models/user.js");
var checkUserExists = require("../middleware/checkUserExists.js");

exports.getAll = (req, res) => {
  Shift.getAll((err, shifts) => {
    console.log(shifts);
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
      console.log(shift);
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
        res.status(201).json(result);
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
        res.status(200).json(result);
      }
    });
  },
];

exports.delete = (req, res) => {
  Shift.delete(req.params.id, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(result);
    }
  });
};
