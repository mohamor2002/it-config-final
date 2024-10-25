

function filterBandwidthLogs(clients,T1,T2) {
    const startDate = new Date(T1);
    const endDate = new Date(T2);
  
    return clients.map(client => {
      const filteredLogs = client.bandwidth_logs.filter(log => {
        const logDate = new Date(log.timestamp);
        return logDate >= startDate && logDate < endDate;
      });
  
      return {
        ...client,
        bandwidth_logs: filteredLogs,
      };
    });
  }
  


export default filterBandwidthLogs