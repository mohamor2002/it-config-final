import { useEffect, useState } from "react";
import Header from "../shared/Header";
import TopBar from "../shared/TopBar";
import TimeController from "./TimeController";
import Network from "./Network";
// import clients from "@/constant/dummedData";
import filterBandwidthLogs from "@/utils/evolution";
import { addMinutes } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { fetchClients } from "@/features/client/clientSlice";
import Bars from "./Bars";
const NetworkEvolution = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const dispatch = useDispatch();
  const { clients, status, error } = useSelector((state) => state.client);
  const [filtredBandwith, setFilteredBandwith] = useState([]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchClients());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (clients.length) {
      setFilteredBandwith(
        filterBandwidthLogs(clients, currentTime, addMinutes(currentTime, 5))
      );
      console.log(filtredBandwith);
    }
  }, [currentTime, clients]);

  useEffect(() => {
    setFilteredBandwith(
      filterBandwidthLogs(clients, currentTime, addMinutes(currentTime, 5))
    );
    console.log(filtredBandwith);
  }, [currentTime]);

  if (status === "loading") {
    return <div>Loading clients...</div>; // Loading message
  }

  if (status === "failed") {
    return <div>Error fetching clients: {error}</div>; // Error message
  }
  return (
    <div className=" w-full rounded-t-md space-y-4 md:space-y-10 pb-20  ">
      <TopBar page={"evolution"} rounded={true} />
      <div className=" px-4 py-6 pl-8">
        <Header
          title={
            "> On branch network-evolution. All changes applied to network topology."
          }
          description={
            "> Review historical performance and AI-driven insights below."
          }
          keyword={"Network Evolution"}
        />
      </div>
      <div className="">
        <TimeController
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
      </div>
      <div className=" w-full px-2 md:px-10">
        {filtredBandwith.length > 0 && <Network clients={filtredBandwith} />}
      </div>
      <div className=" px-2 md:px-10 mt-6 md:mt-0">
        {filtredBandwith.length > 0 && <Bars clients={filtredBandwith} />}
      </div>
    </div>
  );
};

export default NetworkEvolution;
