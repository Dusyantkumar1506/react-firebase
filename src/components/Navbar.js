import React from "react";
import searchImg from "../assets/Component 32.png";
import filterImg from "../assets/Component 39 (2).png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-[40px] mx-[16px] ">
      <div className="flex items-center justify-center w-[260px] h-[80px]">
        <h1 className="text-[32px] text-center w-[260px] flex justify-start  ml-9">
        DUSYANT
        </h1>
      </div>
      <div className="w-[620px] h-[80px] flex items-center justify-center">
        <img
          src={searchImg}
          className="w-[20px] h-[20px] mr-[10px]"
          alt="search"
        />
        <input
          type="text"
          placeholder="Search here..."
          className="text-[12px] text-[#9A9A9E] w-[470px] h-[80px] outline-none"
        />
        <img
          src={filterImg}
          className="w-[26px] h-[26px] mr-[14px]"
          alt="filter"
        />
        <p className="text-sm text-[#303030]">Filters</p>
      </div>
      <button className="h-[80px] w-[260px] bg-[#88C2BB] font-medium text-[#fff] rounded-[10px]">
        Become a Seller
      </button>
    </div>
  );
};

export default Navbar;
