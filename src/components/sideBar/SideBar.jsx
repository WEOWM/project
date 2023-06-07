import React from "react";
import "./SideBar.css";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const data = [
    {
      icon: "/images/icon/dashboard 2.png",
      name: "Dashboard",
      path: "/",
    },
    {
      icon: "/images/icon/campaign 1.png",
      name: "campaigns",
      path: "/campaigns",
    },
    {
      icon: "/images/icon/command 1.png",
      name: "commands",
      path: "/commands",
    },
    {
      icon: "/images/icon/Zone 2.png",
      name: "Zones",
      path: "/Zones",
    },
    {
      icon: "/images/icon/channels1 1.png",
      name: "channels",
      path: "/channels",
    },
    {
      icon: "/images/icon/devices1 1.png",
      name: "Devices",
      path: "/Devices",
    },
    {
      icon: "/images/icon/media library 1.png",
      name: "Devices",
      path: "/Devices",
    },
    {
      icon: "/images/icon/history 5.png",
      name: "history",
      path: "/history",
    },
  ];

  const loc = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <div className="sidebar-logo">
        <img src="images/logo/logo-14 new 1.png" alt="" />
      </div>
      {data.map((items, idx) => {
        return (
          <ul
            onClick={()=>navigate(`${items.path}`)}
            key={idx}
            className={`${loc.pathname === items.path ? "active" : ""}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              listStyle: "none",
              cursor:"pointer"
            }}
          >
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: ".6rem",
                width: "100%",
              }}
            >
              <img className="p-0 ps-5 m-0 " src={items.icon} alt="" />
              <p className="p-0 m-0 ps-2 mt-1">{items.name}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default SideBar;
