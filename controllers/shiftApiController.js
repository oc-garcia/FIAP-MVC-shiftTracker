const Shift = require("../models/shift.js");
var checkUserExists = require("../middleware/checkUserExists.js");

exports.getAllApi = (req, res) => {
  Shift.getAll((err, shifts) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(shifts);
    }
  });
};

exports.getByIdApi = (req, res) => {
  Shift.getById(req.params.id, (err, shift) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(shift);
    }
  });
};

exports.getByUserIdApi = (req, res) => {
  Shift.getByUserId(req.params.userId, (err, shifts) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(shifts);
    }
  });
};

exports.createApi = [
  checkUserExists,
  (req, res) => {
    var { userId, startTime, endTime } = req.body;
    var newShift = { userId: userId, startTime: startTime, endTime: endTime };

    Shift.create(newShift, (err, shift) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(201).json(shift);
      }
    });
  },
];

exports.updateApi = [
  checkUserExists,
  (req, res) => {
    var { userId, startTime, endTime } = req.body;
    var updatedShift = { userId: userId, startTime: startTime, endTime: endTime };
    Shift.update(req.params.id, updatedShift, (err, shift) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json(shift);
      }
    });
  },
];

exports.deleteApi = (req, res) => {
  Shift.delete(req.params.id, (err, shift) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(204).send();
    }
  });
};
