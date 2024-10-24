import sidebarMenu from "@/constant/sidebarMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import Hamburger from "hamburger-react";
const SideBar = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState(sidebarMenu[0].title);
  const handleClick = (item) => {
    setSelectedMenu(item.title);
    navigate(item.link);
  };
  return (
    <div className=" w-auto md:w-[340px] ">
      <TopBar selectedMenu={selectedMenu} handleClick={handleClick} />
      <div className=" hidden md:flex w-[340px] min-h-screen  flex-col justify-between px-4 py-6 shadow-xl">
        <div>
          <div className=" flex flex-row gap-2 pl-4 mb-20 ">
            <img src="/Logo.svg" className=" w-10 aspect-auto" alt="logo" />
            <h1 className=" text-itconfig-blue-dark text-3xl font-[800] font-inter">
              IT Config
            </h1>
          </div>
          <div className=" flex flex-col gap-3 w-full font-roboto text-base font-medium capitalize">
            {sidebarMenu.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleClick(item)}
                  className={`w-full rounded-md text-itconfig-blue-dark hover:bg-itconfig-mauve/20 transition-all duration-300  flex flex-row justify-start items-center gap-4 px-4 py-3 ${
                    selectedMenu === item.title ? " bg-itconfig-mauve/20" : ""
                  } `}
                >
                  {item.icon}
                  <p>{item.title}</p>
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <button
            onClick={() => navigate("/")}
            className={`w-full font-roboto font-bold text-lg rounded-md  bg-itconfig-mauve text-neutral-100  flex flex-row justify-start items-center gap-4 px-4 py-3 `}
          >
            <TbLogout2 size={30} className=" text-neutral-100" />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

const TopBar = ({ selectedMenu, handleClick }) => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick02=(item)=>{
     handleClick(item)
     setOpen(false)
  }
  return (
    <div className="block md:hidden bg-[#f5f5f5] shadow-md px-4 py-4">
      <div className=" flex flex-row justify-between items-center">
        <div className=" flex flex-row gap-2  items-center">
          <img className=" w-10" src={"/Logo.svg"} alt="it config logo" />
          <p className=" font-inter text-2xl font-[800] ">IT Config</p>
        </div>
        <Hamburger
          size={35}
          color={"#807AC9"}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      {isOpen && (
        <div className=" flex justify-between flex-col gap-3 w-full font-roboto text-base font-medium capitalize py-2">
          {sidebarMenu.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => handleClick02(item)}
                className={`w-full rounded-md text-itconfig-blue-dark hover:bg-itconfig-mauve/20 transition-all duration-300  flex flex-row justify-center items-center gap-4 px-4 py-3 `}
              >
                {item.icon}
                <p className={` ${selectedMenu===item.title ?" underline decoration-itconfig-mauve underline-offset-3":""}`}>{item.title}</p>
              </button>
            );
          })}
          <div className=" mt-20">
            <button
              onClick={() => navigate("/")}
              className={`w-full font-roboto font-bold text-lg rounded-md  bg-itconfig-mauve text-neutral-100  flex flex-row justify-center items-center gap-4 px-4 py-3 `}
            >
              <TbLogout2 size={30} className=" text-neutral-100" />
              <p>Logout</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
