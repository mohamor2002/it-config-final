const WebSocket = require('ws');
const stamps = require('./stamps');


// Retrieve DID from environment variable
const DID = parseInt(process.env.DID, 10); 
if (isNaN(DID)) {
  console.error('Invalid DID. Please provide a valid DID as an environment variable.');
  process.exit(1);
}

// Find the entries for the given DID in the stamps data
const didTimestamps = stamps.filter(entry => entry.DID === DID);
if (didTimestamps.length === 0) {
  console.error(`No timestamps found for DID: ${DID}`);
  process.exit(1);
}

let currentIndex = 0;

// Create WebSocket connection
const ws = new WebSocket('ws://router-service:8080');

// Handle connection opening
ws.on('open', () => {
  console.log('Connected to the router');

  // Register the client
  ws.send(JSON.stringify({ type: 'register', subscription: 10000 }));
});

// Handle messages from the server
ws.on('message', (data) => {
  const message = JSON.parse(data);

  if (message.type === 'clientRegistered') {
    console.log('Client registered with ID:', message.clientId);

    // Start the cron-like process to send timestamps every 10 seconds
    const interval = setInterval(() => {
      if (currentIndex < didTimestamps.length) {
        const timestamp = didTimestamps[currentIndex].Date;
        console.log(`Sending timestamp: ${timestamp}`);

        ws.send(JSON.stringify({ type: 'download', wants: didTimestamps[currentIndex].BW_REQUESTED}));
        currentIndex++;
      } else {
        console.log('All timestamps sent. Closing connection.');

        // Clear interval and close the connection
        clearInterval(interval);
        ws.close();
      }
    }, 5000); // 10 seconds interval
  }
});

// Handle connection closure
ws.on('close', () => {
  console.log('Connection closed');
});

// Handle errors
ws.on('error', (err) => {
  console.error('Error:', err.message);
});
