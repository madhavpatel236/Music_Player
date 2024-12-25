import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Playlist from "./Playlist";

import logo from "../images/logo.png";
function Home() {
  // const token = useSelector((store) => store?.token);

  return (

    <div className=" hidden md:flex md:text-white bg-red-950 w-auto h-[100vh]">
      <section className="md:flex-col md:flex md: md:items-center  md:bg-black  md:w-3/12">
        <section className="md:h-1/4 md:flex md:flex-col md:justify-between">
          <div className="md:mt-10 md:mb-16">
            <img
              src={logo}
              alt="logo"
              className="md:w-16 md:h-16  md:rounded-full "
            />
          </div>
          <div className="md:flex md:flex-col md:gap-2">
            <div className="md:text-gray-500 md:items-start">MENU</div>
            <button className="md:flex md:items-start">
              <img src={logo} className="md:w-6" />
              <span className="md:pl-4">Home</span>
            </button>
            <button className="md:flex md:items-start">
              <img src={logo} className="md:w-6" />
              <span className="md:pl-4">trends</span>
            </button>
            <button className="md:flex md:items-start">
              <img src={logo} className="md:w-6" />
              <span className="md:pl-4">Library</span>
            </button>
            <button className="md:flex md:items-start">
              <img src={logo} className="md:w-6" />
              <span className="md:pl-4">Discover</span>
            </button>
          </div>
        </section>
        <section className="md:h-3/4 md:mb-10 md:flex md:flex-col md:justify-end gap-3">
          <div className="md:hover:underline">Setting</div>
          <div className="md:hover:underline">Logout</div>
        </section>
      </section>

      <section>
        <div></div>
      </section>
    </div>
  );
}

export default Home;




































// import React from 'react'

// function Home() {
//   return (
// <div className="flex-col text-center  bg-red-950 w-auto h-[100vh]">
//   <div className="text-white pt-64 mb-4 font-semibold font-serif text-4xl">
//     Turn up the vibe
//   </div>
//   <button
//     onClick={handleClick}
//     className="text-white boder border shadow-white shadow-md p-2 rounded-xl  transition hover:scale-110"
//   >
//     Explore the Library
//   </button>
// </div>
//   )
// }

// export default Home
