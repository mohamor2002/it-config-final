const WebSocket = require('ws');
const db = require('./db');

const wss = new WebSocket.Server({ port: 8080 });
const clients = new Map(); // Store connected clients

wss.on('connection', (ws, req) => {
  const clientIp = Math.random().toString(36).substring(7); 

  ws.on('message', async (message) => {
    const data = JSON.parse(message);

    if (data.type === 'register') {
      const subscription = data.subscription;
      db.findOrCreateClient(clientIp, subscription)
          .then(({ clientId }) => { 
              if (!clientId) {
                  throw new Error('Client ID is null after registration');
              }
              ws.clientId = clientId;
              clients.set(clientId, ws); 
  
              ws.send(JSON.stringify({ type: 'clientRegistered', clientId }));
  
              registerClientWithISP(clientId, subscription);
          })
          .catch(err => {
              console.error('Error finding or creating client:', err);
          });
  }

    // Handle download requests
    if (data.type === 'download') {
      await sendTrafficToISP(ws.clientId, 'download', data.wants);
    }

    // Handle communication
    if (data.type === 'communicate') {
      const targetClient = clients.get(data.targetClientId);
      if (targetClient) {
        targetClient.send(JSON.stringify({ type: 'message', content: data.content }));
      } else {
        ws.send(JSON.stringify({ type: 'error', content: 'Target client not found' }));
      }
    }

    if (data.type === 'getCurrentClients') {
      console.log(Array.from(clients.keys()));
      ws.send(JSON.stringify({ type: 'currentClients', clients: Array.from(clients.keys()) }));
    }

  });

  ws.on('close', () => {
    if (ws.clientId) {
      db.updateClientStatus(ws.clientId, 'disconnected');
      clients.delete(ws.clientId); 
      clientDisconnect(ws.clientId);
      console.log(`Client disconnected: ${clientIp} with ID ${ws.clientId}`);
    }
  });
});

// Register the client with the ISP server
function registerClientWithISP(clientId, subscription) {
  const ws = new WebSocket('ws://localhost:8081');

  ws.on('open', () => {
    ws.send(JSON.stringify({ type: 'register', clientId, maxBandwidth: subscription }));
    console.log(`Client registered with ISP: ${clientId} (Subscription: ${subscription})`);
  });

  ws.on('error', (error) => {
    console.error('Error connecting to ISP:', error);
  });

  ws.on('close', () => {
    console.log('Connection to ISP closed.');
  });
}

// Send traffic updates to the ISP server
async function sendTrafficToISP(clientId, action, wants) {
  const ws = new WebSocket('ws://localhost:8081');

  ws.on('open', () => {
    ws.send(JSON.stringify({ type: 'updateWants', clientId, wants }));
  });

  ws.on('error', (error) => {
    console.error('Error connecting to ISP:', error);
  });
}

async function clientDisconnect (clientId){
  const ws = new WebSocket('ws://localhost:8081');
  ws.on('open', () => {
    ws.send(JSON.stringify({ type: 'clientDisconnect', clientId }));
  })

}

console.log('Router WebSocket server running on ws://localhost:8080');
