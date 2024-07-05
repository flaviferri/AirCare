import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <> 
      <nav className="navbarHome">
        <div className="logoNavbar">
          <img src="src/assets/images/viento.png" alt="logo" />
          <h2>AirCare</h2>
        </div>
        <div className="navLinks">
          <ul className="navbarItems">
            <li>
              <NavLink className="navLinkHome" to="/">
                Home
              </NavLink>
            </li>
            <li>Contact</li>
            <li>About</li>
            <li>Help</li>
            <li>
              <NavLink className="navLink" to="/map">
                Search
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
