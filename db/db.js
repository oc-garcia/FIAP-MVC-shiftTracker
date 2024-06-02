var sqlite3 = require("sqlite3").verbose();

var db = new sqlite3.Database("./db/database.db", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the SQlite database.");
});

db.run(
  `CREATE TABLE IF NOT EXISTS user (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT
)`,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
  }
);

db.run(
  `CREATE TABLE IF NOT EXISTS shift (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  start_time TEXT,
  end_time TEXT,
  FOREIGN KEY(user_id) REFERENCES user(id)
)`,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
  }
);

module.exports = db;