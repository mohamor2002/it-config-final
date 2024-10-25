const sqlite3 = require('sqlite3').verbose();

// Check if running in Docker or development environment
const dbPath = process.env.NODE_ENV === 'docker'
  ? '/usr/src/app/db/network.db' // Path inside Docker container
  : '../db/network.db'// Local dev path

  const db = new sqlite3.Database(dbPath).on('error', (err) => {
    console.log(err,dbPath);
  })
  

// Log client traffic
function logClientTraffic(clientId, requestedBandwidth, maxBandwidth, allocatedBandwidth,minimum_bandwidth, timestamp) {
  db.run(
    `INSERT INTO client_traffic (clientId, timestamp, requested_bandwidth, max_bandwidth, allocated_bandwidth, minimum_bandwidth) VALUES (?, ?, ?, ?, ?, ?)`,
    [clientId, timestamp, requestedBandwidth, maxBandwidth, allocatedBandwidth, minimum_bandwidth],
    function(err) {
      if (err) {
        console.error('Error saving client traffic:', err.message);
      } else {
        console.log(`Logged traffic`);
      }
    }
  );
}

module.exports = {
  logClientTraffic
};
