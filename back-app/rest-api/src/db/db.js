const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Check if running in Docker or development environment
const dbPath = process.env.NODE_ENV === 'docker'
  ? '/app/db/network.db' // Path inside Docker container
  : '../db/network.db'// Local dev path

  const db = new sqlite3.Database(dbPath)


module.exports = db;