const db = require('./db');


function getAllClients() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM clients', (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}


function getTraffic() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM client_traffic', (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function getClientsWithLogs() {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT clients.id, clients.ip, clients.subscription, clients.connection_status, 
             client_traffic.timestamp, client_traffic.requested_bandwidth, 
             client_traffic.max_bandwidth, client_traffic.allocated_bandwidth ,
             client_traffic.minimum_bandwidth, client_traffic.max_rate
      FROM clients
      LEFT JOIN client_traffic ON clients.id = client_traffic.clientId
    `;
    
    db.all(query, [], (err, rows) => {
      if (err) {
        console.error('Error fetching clients with logs:', err.message);
        return reject(err);
      }

      // Transform the data to the desired format
      const clientsMap = new Map();

      rows.forEach(row => {
        if (!clientsMap.has(row.id)) {
          clientsMap.set(row.id, {
            id: row.id,
            ip: row.ip,
            subscription: row.subscription,
            connection_status: row.connection_status,
            bandwidth_logs: []
          });
        }
        
        if (row.timestamp) {
          clientsMap.get(row.id).bandwidth_logs.push({
            timestamp: row.timestamp,
            requested_bandwidth: row.requested_bandwidth,
            max_bandwidth: row.max_bandwidth,
            allocated_bandwidth: row.allocated_bandwidth,
            minimum_bandwidth: row.minimum_bandwidth,
            max_rate: row.max_rate
          });
        }
      });

      resolve(Array.from(clientsMap.values()));
    });
  });
}


const getLatestTrafficByClientId = (clientId) => {
  return new Promise((resolve, reject) => {
    db.get(`
      SELECT requested_bandwidth, allocated_bandwidth 
      FROM client_traffic 
      WHERE clientId = ? 
      ORDER BY timestamp DESC 
      LIMIT 1
    `, [clientId], (err, row) => {
      if (err) {
        return reject(err);
      }
      resolve(row);
    });
  });
};

module.exports = { getAllClients, getTraffic, getClientsWithLogs, getLatestTrafficByClientId };
