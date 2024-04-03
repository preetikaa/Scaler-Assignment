import React from "react";
import "./navbar_booking.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <ul>
            <li className="name">Admin</li>
            <li className="post">Booking Manager</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
