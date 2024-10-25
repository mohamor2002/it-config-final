class BandwidthManager {
    constructor(totalBandwidth) {
      this.totalBandwidth = totalBandwidth;
      this.clients = [];
    }
  
    registerClient(clientId, maxBandwidth) {
      this.clients.push({ clientId, maxBandwidth, wants: 0, gets: 0 , cir: 0});
    }

    removeClient(clientId) {
      this.clients=this.clients.filter(client => client.clientId !== clientId);
    }
  
    updateWants(clientId, wants) {
      const client = this.clients.find(client => client.clientId === clientId);
      if (client) {
        client.wants = wants;
      }
    }
  
    distributeBandwidth() {
      const activeClients = this.clients.length;
  
      if (activeClients === 0) return;
  
      const equalShare = this.totalBandwidth / activeClients;
  
      this.clients.forEach(client => {
          client.gets = Math.min(client.maxBandwidth, equalShare);
      });
  }
  
    getClientBandwidth(clientId) {
      return this.clients.find(client => client.clientId === clientId)?.gets || 0;
    }

    getClientWants(clientId) {
      return this.clients.find(client => client.clientId === clientId)?.wants || 0;
    }

    getClientMaxBandwidth(clientId) {
      return this.clients.find(client => client.clientId === clientId)?.maxBandwidth || 0;
    }
    getClientCIR(clientId) {
      return this.clients.find(client => client.clientId === clientId)?.cir || 0;
    }

  }
  
  module.exports = BandwidthManager;
  