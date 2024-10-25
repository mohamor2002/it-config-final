import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { format, addMinutes, subMinutes, setMinutes } from "date-fns"; // date manipulation utilities
import { useEffect, useState } from "react";
const TimeController = ({currentTime,setCurrentTime}) => {
  // Increment time by 5 minutes
  const handleForward = () => {
    setCurrentTime((prevTime) => addMinutes(prevTime, 5));
  };

  // Decrement time by 5 minutes
  const handleBackward = () => {
    setCurrentTime((prevTime) => subMinutes(prevTime, 5));
  };

  // Round time to nearest 5-minute interval that's divisible by 5
  const roundToExact5 = (date) => {
    const minutes = date.getMinutes();
    const remainder = minutes % 5;
    const roundedMinutes = minutes - remainder; // Always round down to nearest divisible by 5
    return setMinutes(date, roundedMinutes);
  };

  useEffect(() => {
    setCurrentTime(roundToExact5(currentTime));
  }, []);
  // Handle time search input
  const handleSearch = (event) => {
    event.preventDefault();
    const timeInput = event.target.elements.timeSearch.value;
    const [hours, minutes] = timeInput.split(":");
    let newTime = new Date();
    newTime.setHours(hours);
    newTime.setMinutes(minutes);

    // Round the time to the nearest divisible-by-5 minute
    newTime = roundToExact5(newTime);

    setCurrentTime(newTime);
  };
  return (
    <div className="px-4 md:px-10 flex flex-col md:flex-row justify-center md:justify-between gap-2 md:gap-0 items-center">
      <div className=" flex flex-row items-center gap-4">
        <button
          onClick={handleBackward}
          className=" border-[2px] border-itconfig-mauve rounded-md p-2"
        >
          <IoIosArrowBack />
        </button>
        <div>
          <p className="  text-lg font-bold font-roboto">
            {format(currentTime, "HH:mm")} -{" "}
            {format(addMinutes(currentTime, 5), "HH:mm")}
          </p>
        </div>
        <button
          onClick={handleForward}
          className=" border-[2px] border-itconfig-mauve rounded-md p-2"
        >
          <IoIosArrowForward />
        </button>
      </div>
      <form
        className="flex flex-row items-center gap-2"
        onSubmit={handleSearch}
      >
        <input
          className="outline-none bg-itconfig-bgColor border-[2px] border-itconfig-mauve rounded-md px-4 py-3 min-w-[300px]"
          placeholder="HH:mm (e.g., 10:30)"
          name="timeSearch"
          type="text"
          pattern="^([01]\d|2[0-3]):[0-5]\d$" // Regex pattern for HH:mm format
        />
        <button
          type="submit"
          className="p-3 bg-itconfig-mauve hover:bg-itconfig-mauve/90 flex justify-center items-center rounded-md"
        >
          <IoMdSearch size={30} color="#f5f5f5" />
        </button>
      </form>
    </div>
  );
};

export default TimeController;
