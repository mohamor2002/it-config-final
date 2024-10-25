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
  
    async distributeBandwidth(timestamp) {
      const activeClients = this.clients.length;
  
      if (activeClients === 0) return;
      const clientWants = this.clients.map(client => client.wants);
  
      try {

        const response = await fetch("http://model-server:8010/predict",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
          {
            timestamp:timestamp,
            user_requests:clientWants
          }
          )
        });
        const {cir,mir} = await response.json();
        this.clients.forEach((client, index) => {
          client.cir = cir[index];
          client.gets = mir[index];
        });
        
      } catch (error) {
        console.error('Error distributing bandwidth:', error);
        
      }
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
  