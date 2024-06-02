var Shift = require("../models/shift.js");

exports.getAll = (req, res) => {
  Shift.getAll((err, shifts) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(shifts);
    }
  });
};

exports.getById = (req, res) => {
  Shift.getById(req.params.id, (err, shift) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(shift);
    }
  });
};

exports.getByUserId = (req, res) => {
  Shift.getByUserId(req.params.userId, (err, shifts) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(shifts);
    }
  });
};

exports.create = (req, res) => {
  Shift.create(req.body, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).json(result);
    }
  });
};

exports.update = (req, res) => {
  Shift.update(req.params.id, req.body, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(result);
    }
  });
};

exports.delete = (req, res) => {
  Shift.delete(req.params.id, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(result);
    }
  });
};