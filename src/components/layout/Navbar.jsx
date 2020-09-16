import React from "react";
import {NavLink} from 'react-router-dom'

const Navbar = () => (
  <>
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>
                <NavLink to="/" className="link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="link">
                  Create Flash Cards
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="link">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className="link">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Navbar;
