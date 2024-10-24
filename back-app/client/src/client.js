const WebSocket = require('ws');

const ws = new WebSocket('ws://router-service:8080');

ws.on('open', () => {
  console.log('Connected to the router');

  ws.send(JSON.stringify({ type: 'register', subscription: 500 })); 


  setTimeout(() => {
    ws.send(JSON.stringify({ type: 'download', wants: 200}));
  }, 200);
});

ws.on('close', () => {
  console.log('Connection closed');
})

ws.on('error', (err) => {
  console.error('Error:', err.message);
})


ws.on('message', (data) => {
  const message = JSON.parse(data);
  if (message.type === 'clientRegistered') {
    console.log('Client registered with ID:', message.clientId);
  }
});
