import { useState } from "react";
import Icons from "./hooks/Icons";
import { NavLink } from "react-router-dom";

// pics
import profilePic from "./assets/profilePic.jpeg";
import feesIcon from "./assets/fees.png";
import helpIcon from "./assets/support.png";
import timeTableIcon from "./assets/timetable.png";
import attendanceIcon from "./assets/attendance.png";
import reportIcon from "./assets/report-card.png";
import socialIcon from "./assets/social-media.png";
import galleryIcon from "./assets/gallery.png";
import materialIcon from "./assets/open-book.png";
import suggestionsIcon from "./assets/suggestion.png";

const Profile = () => {
  const [extendArrow, setExtendArrow] = useState(false);

  const extendProfile = () => {
    setExtendArrow((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center rounded-[3rem] mx-4 py-6 bg-[#F9F4E8]">
      <div>
        <img
          src={profilePic}
          alt="profilePic"
          className=" size-[4rem] rounded-full"
        />
      </div>
      <div className="pt-2">
        <p className="text-[#5B4629]">Kasinaboya Dhanush Kumar</p>
      </div>
      <div>
        <p className="text-[#5B4629]">HU22CSEN0300183</p>
      </div>
      <div
        className={`transition-max-height duration-1000 overflow-hidden ${
          extendArrow ? "ease-in" : "ease-out"
        }`}
        style={{ maxHeight: extendArrow ? "5000px" : "0px" }}
      >
        <div
          className={`${
            extendArrow
              ? "flex ease-in flex-row flex-wrap py-4 items-center justify-center"
              : "hidden"
          }`}
        >
          <NavLink to="fees">
            <Icons source={feesIcon} heading="Fees" />
          </NavLink>
          <NavLink to="help">
            <Icons source={helpIcon} heading="Help" />
          </NavLink>
          <NavLink to="timetable">
            <Icons source={timeTableIcon} heading="TimeTable" />
          </NavLink>
          <NavLink to="gallery">
            <Icons source={galleryIcon} heading="Gallery" />
          </NavLink>
          <Icons source={reportIcon} heading="Report" />
          <Icons source={socialIcon} heading="Social" />
          <Icons source={attendanceIcon} heading="Attendance" />
          <Icons source={materialIcon} heading="Material" />
          <Icons source={suggestionsIcon} heading="Suggestions" />
        </div>
      </div>

      <div>
        <button onClick={extendProfile}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`w-6 h-6 pt-2 ${extendArrow ? "ease-in " : ""}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Profile;
