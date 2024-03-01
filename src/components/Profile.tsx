import { useState } from "react";
import profilePic from "./assets/profilePic.jpeg"
import feesIcon from "./assets/fees.png"
import Icons from "./hooks/Icons";
import {Link} from 'react-router-dom'

const Profile = () => {
    const [extendArrow,setExtendArrow] = useState(false)

    const extendProfile = () => {
            setExtendArrow(prev => !prev)
            console.log(extendArrow)
    }

    return ( 
        <div className="flex flex-col items-center rounded-[3rem] mx-4 py-6 bg-[#9A9F78]">
            {/* Profile pic */}
            <div>
                <img src={profilePic} alt="profilePic" className=" size-[4rem] rounded-full"/>
            </div>
            {/* Name */}
            <div className="pt-2">
                <p className="text-[#5B4629]">Kasinaboya Dhanush Kumar</p>
            </div>
            {/* Roll No */}
            <div>
                <p className="text-[#5B4629]">HU22CseN0300183</p>
            </div>
            {/* Icons */}
            <div className={`${extendArrow?"flex ease-in flex-row flex-wrap py-4 ":"hidden"}`}>
                <Link to="/fees"><Icons source={feesIcon} heading="Fees"/></Link>
                <Icons source={feesIcon} heading="Chat"/>
                <Icons source={feesIcon} heading="Timetable"/>
                <Icons source={feesIcon} heading="Attendance"/>
                <Icons source={feesIcon} heading="Report"/>
                <Icons source={feesIcon} heading="Social"/>
                <Icons source={feesIcon} heading="Gallery"/>
                <Icons source={feesIcon} heading="Material"/>
                <Icons source={feesIcon} heading="fees"/>
            </div>
            {/* Line/Arrow */}
            <div>
                <button onClick={extendProfile}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 pt-2 ${extendArrow?"ease-in ":""}`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>
        </div>
     );
}
 
export default Profile;