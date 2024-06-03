var User = require("../models/user.js");

function checkUserExists(req, res, next) {
  const userId = Number(req.body.userId);
  User.getById(userId, (err, user) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("An error occurred");
    } else if (!user) {
      res.status(400).send("User not found");
    } else {
      next();
    }
  });
}

module.exports = checkUserExists;
