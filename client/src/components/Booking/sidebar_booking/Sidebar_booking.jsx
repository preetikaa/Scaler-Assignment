import React from "react";
import "./sidebar_booking.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import EventIcon from "@mui/icons-material/Event";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Scaler</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">LISTS</p>

          {/* Room Booking -----------------------------------------------------------------------*/}
          <Link to="" style={{ textDecoration: "none" }}>
            <li>
              <EventIcon className="icon" />
              <a href="bookinform.jsx">
                <span className="active">Room Booking Management</span>
              </a>
            </li>
          </Link>

          

          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
