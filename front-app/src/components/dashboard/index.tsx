import Header from "../shared/Header";
import TopBar from "../shared/TopBar";
import Bars from "./Bars";
import Circle from "./Circle";
import LineDraw from "./LineDraw";

const Dashboard = () => {
  return (
    <div className=" w-full rounded-t-md space-y-4 md:space-y-10  ">
      <TopBar page={"dashboard"} rounded={true} />
      <div className=" px-4 py-6 pl-8">
        <Header
          title={"> On branch dashboard network control is active."}
          description={"> Review stats and performance below."}
          keyword={"dashboard"}
        />
      </div>
      <div className=" flex flex-col md:flex-row px-4 md:px-10 gap-4 md:gap-6 items-center justify-between">
        <Bars />
        <Circle />
      </div>
      <div className=" px-4 md:px-10">
        <LineDraw />
      </div>
    </div>
  );
};

export default Dashboard;
