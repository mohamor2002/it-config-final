const queries = require('../db/trafficQueries'); 

async function getClients (req, res) {
  try {
    const clients = await queries.getAllClients(); // Fetch all clients
    const clientData = await Promise.all(clients.map(async (client) => {
      const latestTraffic = await queries.getLatestTrafficByClientId(client.id);
      
      return {
        id: client.id,
        name: 'Client '+client.id, 
        ip: client.ip,
        port: client.port, 
        subscription: client.subscription,
        connection_status: client.connection_status,
        current_requested_bandwidth: latestTraffic ? latestTraffic.requested_bandwidth : 0,
        current_allocated_bandwidth: latestTraffic ? latestTraffic.allocated_bandwidth : 0,
      };
    }));

    res.json(clientData);
  } catch (err) {
    console.error('Error getting clients:', err);
    res.status(500).json({ message: 'Error getting clients.' });
  }
};

async function getTraffic(req, res) {
  try {
    const traffic = await queries.getTraffic(); // Use the queries functions
    res.json(traffic);
  } catch (error) {
    console.error('Error fetching traffic:', error);
    res.status(500).json({ error: 'Error fetching traffic' });
  }
}

async function getClientsWithLogs(req, res) {
  try {
    const clients = await queries.getClientsWithLogs(); 
    res.json(clients);
  } catch (error) {
    console.error('Error fetching clients with logs:', error);
    res.status(500).json({ error: 'Error fetching clients with logs' });
  }
}

module.exports = { getClients, getTraffic,getClientsWithLogs };
