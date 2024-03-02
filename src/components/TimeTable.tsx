import { Outlet, NavLink } from "react-router-dom";

const TimeTable = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#C2B0A1] to-[#897765] px-4 py-4 ">
      <div className="flex flex-row items-center justify-between text-2xl mb-4">
        <h1>Time Table</h1>
        <NavLink to="/">
          <button className="bg-white px-4 py-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </NavLink>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col space-1-2 ">
          <p>8 AM - 9 AM</p>
          <div className="flex flex-col bg-white mb-2 rounded-md px-2 py-4 w-[85%]">
            <p className="text-3xl">MATHEMATICS</p>
            <p className=" font-extralight">Dr. Suryatej Ponnapali</p>
          </div>
        </div>
        <div className="flex flex-col space-1-2 ">
          <p className="">9 AM - 10 AM</p>
          <div className="flex flex-col bg-white mb-2 rounded-md px-2 py-4 w-[85%]">
            <p className="text-3xl">PHYSICS</p>
            <p className=" font-extralight">Dr. Suryatej Ponnapali</p>
          </div>
        </div>
        <div className="flex flex-col space-1-2 ">
          <p>10 AM - 11 AM</p>
          <div className="flex flex-col bg-white mb-2 rounded-md px-2 py-4 w-[85%]">
            <p className="text-3xl">CHEMISTRY</p>
            <p className=" font-extralight">Dr. Suryatej Ponnapali</p>
          </div>
        </div>
        <div className="flex flex-col space-1-2 ">
          <p>11 AM - 12 PM</p>
          <div className="flex flex-col bg-white mb-2 rounded-md px-2 py-4 w-[85%]">
            <p className="text-3xl">BIOLOGY</p>
            <p className=" font-extralight">Dr. Suryatej Ponnapali</p>
          </div>
        </div>
        <div className="flex flex-col space-1-2 ">
          <p>11 AM - 12 PM</p>
          <div className="flex flex-col bg-white mb-2 rounded-md px-2 py-4 w-[85%]">
            <p className="text-3xl">GEOGRAPHY</p>
            <p className=" font-extralight">Dr. Suryatej Ponnapali</p>
          </div>
        </div>
        <div className="flex flex-col space-1-2 ">
          <p>1 PM - 2 PM</p>
          <div className="flex flex-col bg-white mb-2 rounded-md px-2 py-4 w-[85%]">
            <p className="text-3xl">HISTORY</p>
            <p className=" font-extralight">Dr. Suryatej Ponnapali</p>
          </div>
        </div>
        <div className="flex flex-col space-1-2 ">
          <p>2 PM - 3 PM</p>
          <div className="flex flex-col bg-white mb-2 rounded-md px-2 py-4 w-[85%]">
            <p className="text-3xl">MATHEMATICS</p>
            <p className=" font-extralight">Dr. Suryatej Ponnapali</p>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default TimeTable;
