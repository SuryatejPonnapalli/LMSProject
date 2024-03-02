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
import profileIcon from "./assets/suggestion.png";

const Profile = (props: any) => {
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
          props.extendArrow ? "ease-in" : "ease-out"
        }`}
        style={{ maxHeight: props.extendArrow ? "5000px" : "0px" }}
      >
        <div
          className={`${
            props.extendArrow
              ? "flex ease-in flex-row flex-wrap py-4 items-center justify-center"
              : "hidden"
          }`}
        >
          <NavLink to="/fees">
            <Icons source={feesIcon} heading="Fees" />
          </NavLink>
          <NavLink to="/help">
            <Icons source={helpIcon} heading="Help" />
          </NavLink>
          <NavLink to="/timetable">
            <Icons source={timeTableIcon} heading="TimeTable" />
          </NavLink>
          <NavLink to="/gallery">
            <Icons source={galleryIcon} heading="Gallery" />
          </NavLink>
          <NavLink to="/report">
            <Icons source={reportIcon} heading="Report" />
          </NavLink>
          <NavLink to="/social">
            <Icons source={socialIcon} heading="Social" />
          </NavLink>
          <NavLink to="/attendance">
            <Icons source={attendanceIcon} heading="Attendance" />
          </NavLink>
          <NavLink to="/material">
            <Icons source={materialIcon} heading="Material" />
          </NavLink>
          <NavLink to="/profile">
            <Icons source={profileIcon} heading="Profile" />
          </NavLink>
        </div>
      </div>

      <div>
        <button onClick={props.extendProfile}>
          {props.extendArrow ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Profile;
