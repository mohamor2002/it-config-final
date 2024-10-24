import TopBar from "@/components/shared/TopBar";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate()
  const redirectLogIn=()=>{
    navigate("/login")
  }
  const redirectSignUp=()=>{
    navigate("/signup")
  }
  return (
    <div className=" flex flex-col min-h-screen">
      <TopBar page="Admin" />
      <div className=" flex flex-col  items-center  flex-grow gap-8 py-10 md:gap-20 md:py-20  ">
        <div className=" flex flex-row gap-5 md:gap-12 justify-center items-center">
          <img src="./Logo.svg" alt="logo" />
          <h1 className=" text-itconfig-blue-dark text-5xl md:text-8xl font-[800] font-inter">
            IT Config
          </h1>
        </div>
        <div className=" font-roboto text-lg md:text-3xl w-auto md:max-w-3xl space-y-1 md:space-y-3 px-4 md:px-0">
          <p className=" font-bold tracking-wide ">
            [IT Config@Admin ∼] ${" "}
            <span className=" font-normal"> git status</span>
          </p>
          <p>
            On branch main Your working directory is clean. Welcome to IT
            Config.{" "}
          </p>
          <p>Track and control your network like a pro.</p>
        </div>
        <div className="  flex flex-col md:flex-row justify-between items-center gap-4  md:gap-96 w-full md:w-auto">
          <button onClick={redirectSignUp} className=" bg-itconfig-mauve text-lg  md:text-3xl font-roboto text-itconfig-blue-dark px-8 py-4 rounded-md">Sign up</button>
          <button onClick={redirectLogIn} className=" bg-itconfig-mauve text-lg  md:text-3xl font-roboto text-itconfig-blue-dark px-8 py-4 rounded-md">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
