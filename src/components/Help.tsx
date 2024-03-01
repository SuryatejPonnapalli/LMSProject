import { Outlet,NavLink } from "react-router-dom";

const Help = () => {
    return ( 
        <div>
            <p>Hi</p>
            <nav>
                <NavLink to="contact"><p>Contact Us</p></NavLink>
            </nav>
        <Outlet />
        </div>
     );
}
 
export default Help;