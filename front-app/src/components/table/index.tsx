import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import axios from "axios";

export default function DemoPage() {
  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/traffic/clients"); // Update to the correct endpoint
        setClientData(response.data); // Set the fetched data
      } catch (error) {
        console.error("Error fetching client data:", error);
      }
    };
     
    fetchData(); // Fetch data on component mount
    // Set an interval to fetch clients every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId); 
   }, []); // Empty dependency array to run once on mount

  return (
    <div className="">
      <DataTable columns={columns} data={clientData} />
    </div>
  );
}
