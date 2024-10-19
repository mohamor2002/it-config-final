const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Check if running in Docker or development environment
const dbPath = process.env.NODE_ENV === 'docker'
  ? '/app/db/network.db' // Path inside Docker container
  : '../db/network.db'// Local dev path

  const db = new sqlite3.Database(dbPath)

// Log client traffic
function logClientTraffic(clientId, requestedBandwidth, maxBandwidth, allocatedBandwidth, timestamp) {
  db.run(
    `INSERT INTO client_traffic (clientId, timestamp, requested_bandwidth, max_bandwidth, allocated_bandwidth) VALUES (?, ?, ?, ?, ?)`,
    [clientId, timestamp, requestedBandwidth, maxBandwidth, allocatedBandwidth],
    function(err) {
      if (err) {
        console.error('Error saving client traffic:', err.message);
      } else {
        console.log(`Logged traffic for Client ID: ${clientId}, Requested Bandwidth: ${requestedBandwidth}, Max Bandwidth: ${maxBandwidth}, Allocated Bandwidth: ${allocatedBandwidth}, Timestamp: ${timestamp}`);
      }
    }
  );
}

module.exports = {
  logClientTraffic
};
