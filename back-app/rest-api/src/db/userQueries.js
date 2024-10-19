const db = require('./db');

// User Queries
exports.createUser = (email, password) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, password], function (err) {
      if (err) {
        return reject(err);
      }
      resolve(this.lastID);
    });
  });
};

exports.getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
      if (err) {
        return reject(err);
      }
      resolve(user);
    });
  });
};

function getAllUsers() {
  return new Promise((resolve, reject) => {
      db.all('SELECT id, email FROM users', [], (err, rows) => {
          if (err) {
              return reject(err);
          }
          resolve(rows);
      });
  });
}


