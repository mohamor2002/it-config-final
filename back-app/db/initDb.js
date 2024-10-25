const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Set the database path based on the environment
const dbPath = process.env.NODE_ENV === 'docker' ? '/usr/src/app/db/network.db' : './network.db'; // Use volume path in Docker

console.log(`Database path: ${dbPath}`);

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});
// Create the necessary tables
db.serialize(() => {
  // Create users table (without port and with name)
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      password TEXT NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error("Error creating users table:", err.message);
    }
  });

  // Create clients table (without port and name)
  db.run(`
    CREATE TABLE IF NOT EXISTS clients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ip TEXT NOT NULL,
      subscription INTEGER,
      connection_status TEXT
    )
  `, (err) => {
    if (err) {
      console.error("Error creating clients table:", err.message);
    }
  });

  // Create client_traffic table with the correct foreign key reference
  db.run(`
    CREATE TABLE IF NOT EXISTS client_traffic (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      clientId TEXT,  
      timestamp TEXT DEFAULT (datetime('now')),
      requested_bandwidth INTEGER,
      max_bandwidth INTEGER,
      allocated_bandwidth INTEGER,
      minimum_bandwidth INTEGER,
      FOREIGN KEY (clientId) REFERENCES clients(id)
    )
  `, (err) => {
    if (err) {
      console.error("Error creating client_traffic table:", err.message);
    }
  });

  console.log("Database initialized with 'users', 'clients', and 'client_traffic' tables.");
});

// Close the database connection
db.close();
