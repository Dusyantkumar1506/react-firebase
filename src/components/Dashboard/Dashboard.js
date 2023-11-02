import React from "react";
import Navbar from "../Navbar";
import LeftSideBar from "../leftsidebar/LeftSidebar";
import MainSidebar from "../MainSidebar";
import RightSidebar from "../RightSidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className=" top-0 left-0 h-screen flex justify-between bg-[#F5F5F5]">
        <LeftSideBar />
        <MainSidebar />
        <RightSidebar />
      </div>
    </>
  );
};

export default Dashboard;
