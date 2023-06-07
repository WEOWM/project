import React from "react";
import SideBar from "../components/sideBar/SideBar";
import Header from "../components/header/Header";
import "./Default.css";
import { Outlet } from "react-router-dom";
const Default = () => {
  return (
    <div className="layout-body">
      <div className="side-bar">
        <SideBar />
      </div>
      <div style={{width:"100%"}} >
        <Header />
        <div className="content ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Default;
