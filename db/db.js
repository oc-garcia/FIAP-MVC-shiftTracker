var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./db/database.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

db.run(`CREATE TABLE IF NOT EXISTS user (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT
)`, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Created user table');
});

module.exports = db;