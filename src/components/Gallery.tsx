import { Outlet, NavLink } from "react-router-dom";
import photo1 from "./assets/WhatsApp Image 2024-02-19 at 12.25.37.jpeg";
import photo2 from "./assets/WhatsApp Image 2024-02-19 at 12.25.37 (1).jpeg";

const Gallery = () => {
  return (
    <div className="flex flex-col justify-center bg-gradient-to-b from-[#C2B0A1] to-[#897765] py-10 px-4">
      <div className="flex flex-rwo justify-between items-center ">
        <h1 className="text-3xl">Gallery</h1>
        <NavLink to="/">
          <button className="bg-white px-4 py-2 rounded-lg ml-">
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
      <div className="relative space-y-2 mt-4">
        <div className="relative ">
          <img src={photo1} className="rounded-[2rem] " />
          <div className="absolute bottom-5 right-10 hover:bg-black hover:text-white">
            <p className="text-white text-3xl ">Annual day 2024</p>
          </div>
        </div>
        <div className="relative">
          <img src={photo2} className="rounded-[2rem] " />
          <div className="absolute bottom-5 right-10">
            <p className="text-white text-3xl">Annual day 2023</p>
          </div>
        </div>
        <div className="relative">
          <img src={photo1} className="rounded-[2rem] " />
          <div className="absolute bottom-5 right-10">
            <p className="text-white text-3xl">Annual day 2024</p>
          </div>
        </div>
        <div className="relative">
          <img src={photo2} className="rounded-[2rem] " />
          <div className="absolute bottom-5 right-10">
            <p className="text-white text-3xl">Annual day 2024</p>
          </div>
        </div>
        <div className="relative">
          <img src={photo2} className="rounded-[2rem] " />
          <div className="absolute bottom-5 right-10">
            <p className="text-white text-3xl">Annual day 2023</p>
          </div>
        </div>
        <div className="relative">
          <img src={photo1} className="rounded-[2rem] " />
          <div className="absolute bottom-5 right-10">
            <p className="text-white text-3xl">Annual day 2024</p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Gallery;
