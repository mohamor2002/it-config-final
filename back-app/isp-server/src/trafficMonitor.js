const db = require('./db');

class TrafficMonitor {
  constructor(bandwidthManager) {
    this.bandwidthManager = bandwidthManager;
  }

  logClientTraffic(clientId, timestamp) {

    const gets = this.bandwidthManager.getClientBandwidth(clientId); 
    const wants = this.bandwidthManager.getClientWants(clientId);
    const maxBandwidth = this.bandwidthManager.getClientMaxBandwidth(clientId);
    const cir = this.bandwidthManager.getClientCIR(clientId);

    db.logClientTraffic(clientId, wants, maxBandwidth, gets,cir, timestamp);
  }

  logAllClientsTraffic(timestamp) {

    console.log('Logging traffic for client:', this.bandwidthManager.clients)
    this.bandwidthManager.clients.forEach(client => {
      this.logClientTraffic(client.clientId, timestamp);
    });
  }
}

module.exports = TrafficMonitor;
