import React, { useState } from "react";
import "../index.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Home from "./Home";
import comde from '../images/come.jpeg'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden bg-black max-w-screen text-white">
      <div className="flex justify-between items-center p-4">
      <section className='ml-3'>
        <img src={logo} alt='' onClick={<Home />} className='w-8 h-8 rounded-full' />
      </section>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-14 left-0 w-full bg-black md:static md:flex md:items-center md:space-x-6`}
        >

          <div
            className={`fixed top-0 right-0 h-full w-2/3 bg-black transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              {["Library", "Treanding", "setting", "Logout"].map((item) => (
                <Link
                  key={item}
                  to='/commingsoon'
                  className="text-xl hover:text-gray-400"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
