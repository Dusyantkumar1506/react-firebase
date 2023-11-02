import React, { useState } from "react";
import Cards from "../cards";

const RightSidebar = () => {
  const [activeTab, setActiveTab] = useState("Artists");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-[250px] mr-[20px] mt-6">
      <div className="flex gap-6 font-semibold">
        <p
          className={`${
            activeTab === "Artists" ? " text-[#101010]" : "text-[#8D8D8D]"
          } px-2 py-1 rounded cursor-pointer`}
          onClick={() => handleTabClick("Artists")}
        >
          Artists
        </p>
        <p
          className={`${
            activeTab === "Photographers" ? "text-[#101010]" : "text-[#8D8D8D]"
          } px-2 py-1 rounded cursor-pointer`}
          onClick={() => handleTabClick("Photographers")}
        >
          Photographers
        </p>
      </div>
      <Cards />
    </div>
  );
};

export default RightSidebar;
