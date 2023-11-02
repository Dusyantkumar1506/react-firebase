import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <nav className="bg-[#a545e4] p-4 flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <h1>Dusyant Developer</h1>
        </div>
        <div>
          <Link
            to="/login"
            className="bg-white text-[#a545e4] hover:bg-[#e5d0f2] px-4 py-2 rounded-lg mr-2 font-medium"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-[#a545e4] hover:bg-[#e5d0f2] px-4 py-2 rounded-lg font-medium"
          >
            Signup
          </Link>
        </div>
      </nav>
      <div class="bg-white rounded-lg italic text-6xl text-center flex justify-center items-center w-full h-screen flex-col">
        <h1 class="text-4xl font-bold text-[#a545e4] mb-4">
          Hello myself Dusyant Kumar
        </h1>
        <p class="text-lg text-gray-700">
          I'm a passionate frontend developer.
        </p>
        <h2 className=" font-bold text-2xl mt-4">
          {props.name ? `Welcome : ${props.name}` : "Login Please"}
        </h2>
      </div>
    </>
  );
};

export default Home;
