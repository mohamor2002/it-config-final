const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Set the database path based on the environment
const dbPath = process.env.NODE_ENV === 'docker' ? '/usr/src/app/db/network.db' : './network.db';

console.log(`Seeding database at path: ${dbPath}`);

const db = new sqlite3.Database(dbPath); // Centralized path for seeding

const clients = [];
const trafficLogs = [];

// Create 20 clients
for (let i = 1; i <= 20; i++) {
  const clientId = i; // Client ID from 1 to 20
  const ip = `192.168.1.${i}`; // Example IP addresses
  const subscription = Math.floor(Math.random() * 30) + 1; // Random subscription between 1 and 30
  const connection_status = 'disconnected'; // Set all clients to disconnected

  clients.push({ id: clientId, ip, subscription, connection_status });

  // Create between 5 and 10 logs for each client
  const numberOfLogs = Math.floor(Math.random() * 6) + 5; // Random number between 5 and 10
  for (let j = 0; j < numberOfLogs; j++) {
    const requested_bandwidth = Math.floor(Math.random() * 20) + 1; // Random requested bandwidth between 1 and 20
    const max_bandwidth = subscription; // Max bandwidth is set to the subscription limit
    const allocated_bandwidth = Math.min(requested_bandwidth, max_bandwidth); // Ensure allocated is not more than requested or max

    // Adjusting allocation based on Fair Access Policy (FAP)
    if (allocated_bandwidth > 0) {
      // If there's any requested bandwidth, allocate a fair share based on the subscription
      const fairShare = Math.min(max_bandwidth, Math.floor(max_bandwidth * (Math.random() * 0.8 + 0.2))); // Allocating between 20% and 100% of max bandwidth
      trafficLogs.push({
        clientId: clientId,
        requested_bandwidth,
        max_bandwidth,
        allocated_bandwidth: Math.min(allocated_bandwidth, fairShare), // Apply FAP to the allocation
      });
    }
  }
}

db.serialize(() => {
  const insertClient = db.prepare(`INSERT INTO clients (id, ip, subscription, connection_status) VALUES (?, ?, ?, ?)`);
  clients.forEach(client => {
    insertClient.run(client.id, client.ip, client.subscription, client.connection_status);
  });
  insertClient.finalize();

  const insertTrafficLog = db.prepare(`INSERT INTO client_traffic (clientId, requested_bandwidth, max_bandwidth, allocated_bandwidth) VALUES (?, ?, ?, ?)`);
  trafficLogs.forEach(log => {
    insertTrafficLog.run(log.clientId, log.requested_bandwidth, log.max_bandwidth, log.allocated_bandwidth);
  });
  insertTrafficLog.finalize();

  console.log("Clients and traffic logs inserted successfully.");
});

// Close the database connection
db.close();
