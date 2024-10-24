const sqlite3 = require('sqlite3').verbose();

// Check if running in Docker or development environment
const dbPath = process.env.NODE_ENV === 'docker'
  ? '/usr/src/app/db/network.db' // Path inside Docker container
  : '../db/network.db'// Local dev path
  const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Failed to connect to the database:', err,dbPath);
    } else {
      console.log('Connected to the database:', dbPath);
    }
  });

// Function to find or create a client based on their IP
function findOrCreateClient(clientIp, subscription) {
    return new Promise((resolve, reject) => {
        db.get('SELECT id, connection_status FROM clients WHERE ip = ?', [clientIp], (err, row) => {
            if (err) {
                console.log("Error in findOrCreateClient", err);
                return reject(err);
            }
            
            console.log("Database query result:", row); // Log the entire row

            if (row) {
                // Client exists
                console.log(`Client found: ID = ${row.id}, Status = ${row.connection_status}`);
                if (row.connection_status === 'disconnected') {
                    // Update connection status
                    db.run(
                        'UPDATE clients SET connection_status = ? WHERE id = ?',
                        ['connected', row.id],
                        function (err) {
                            if (err) {
                                return reject(err);
                            }
                            console.log(`Client status updated: ID = ${row.id}`);
                            resolve({ clientId: row.id }); // Return the client ID after updating status
                        }
                    );
                } else {
                    resolve({ clientId: row.id }); // Return the client ID if already connected
                }
            } else {
                // Create new client
                const defaultConnectionStatus = 'connected'; // Set default status to connected
                console.log("Creating new client");

                db.run(
                    `INSERT INTO clients (ip, subscription, connection_status) 
                    VALUES (?, ?, ?)`,
                    [clientIp, subscription, defaultConnectionStatus],
                    function (err) {
                        if (err) {
                            console.log("Error creating new client:", err);
                            return reject(err);
                        }
                        console.log(`New client created: ID = ${this.lastID}`);
                        resolve({ clientId: this.lastID }); // Return the newly created client ID
                    }
                );
            }
        });
    });
}


function updateClientStatus(clientId, status) {
  return new Promise((resolve, reject) => {
    db.run('UPDATE clients SET connection_status = ? WHERE id = ?', [status, clientId], function (err) {
      if (err) {
        return reject(err);
      }
      resolve(this.changes); // Number of rows updated
    });
  });
}


module.exports = {
    findOrCreateClient,
    updateClientStatus
};
