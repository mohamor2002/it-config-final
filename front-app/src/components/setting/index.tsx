import Header from "../shared/Header";
import TopBar from "../shared/TopBar";
import ServerInfo from "./ServerInfo";

const Setting = () => {
  return (
    <div className=" w-full rounded-t-md space-y-10  pb-10 ">
      <TopBar page={"settings"} rounded={true} />
      <div className=" px-4 py-6 pl-8">
        <Header
          title={"> On branch settings"}
          description={"> Customize your configurations and preferences below."}
          keyword={"settings"}
        />
      </div>
      <div className=" px-10">
        <ServerInfo />
      </div>
    </div>
  );
};

export default Setting;
