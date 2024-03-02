import { Outlet, NavLink } from "react-router-dom";

const TimeTable = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#C2B0A1] to-[#897765] px-2 py-4 ">
      <div className="flex flex-row items-center justify-between text-2xl">
        <h1>Time Table</h1>
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
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <p className="bg-white">8-9 AM</p>
          <div></div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default TimeTable;
