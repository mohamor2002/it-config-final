const WebSocket = require('ws');
const cron = require('node-cron');
const BandwidthManager = require('./throttling');
const TrafficMonitor = require('./trafficMonitor');

// Create the WebSocket server for the ISP
const wss = new WebSocket.Server({ port: 8081 });

const bandwidthManager = new BandwidthManager(3000); 
const trafficMonitor = new TrafficMonitor(bandwidthManager);

function fetchCurrentClients() {
  const routerWs = new WebSocket('ws://localhost:8080'); // Connect to the router WebSocket server

  routerWs.on('open', () => {
    // Request current clients
    routerWs.send(JSON.stringify({ type: 'getCurrentClients' }));
  });

  routerWs.on('message', (message) => {
    const data = JSON.parse(message);
    if (data.type === 'currentClients') {
      data.clients.forEach(client => {
        bandwidthManager.registerClient(client.clientId, client.maxBandwidth); // Register each client
        console.log('Client registered from router:', client.clientId);
      });
    }
  });

  routerWs.on('error', (error) => {
    console.error('Error connecting to router:', error);
  });

  routerWs.on('close', () => {
    console.log('Connection to router closed.');
  });
}

fetchCurrentClients();

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const data = JSON.parse(message);

    if (data.type === 'register') {
      bandwidthManager.registerClient(data.clientId, data.maxBandwidth);
      console.log('Client registered:', data.clientId);
    }

    if (data.type === 'updateWants') {
      bandwidthManager.updateWants(data.clientId, data.wants);
      console.log('Client wants updated:', data.clientId);
    }
    if (data.type === 'clientDisconnect') {
      bandwidthManager.removeClient(data.clientId);
      console.log('Client disconnected:', data.clientId);
    }
  });
});

// Cron job to rebalance bandwidth and log traffic every 5 seconds
cron.schedule('*/5 * * * * *', () => {
  bandwidthManager.distributeBandwidth();
  const timestamp = new Date().toISOString()
  trafficMonitor.logAllClientsTraffic(timestamp);
  console.log('Rebalance complete at:', new Date(timestamp).toISOString());
});

console.log('ISP WebSocket server running on ws://localhost:8081');
