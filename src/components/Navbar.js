import { useState } from "react";
import DarkModeToggles from "./Dark";
import { NavLink } from "react-router-dom";
// import { AiOutlineArrowRight } from 'react-icons/ai';

export default function NavBar() {

  return (
    <div className="main-container">
      <div className="wrapper ">
        <div className=" navbar-container  ">
          <nav className="w-full bg-purple-500 shadow py-4">
            <div className="justify-between items-center px-4 mx-auto lg:max-w-7xl  md:items-center md:flex md:px-8">
              <div className=" md:flex items-center justify-between gap-5 block">
                <div className="">
                  <a href="#">
                  <h2 className="text-2xl font-bold text-white ">LOGO</h2>
                  </a>
                </div>
                <div className="flex-1 justify-self-center  mt-8 md:block md:pb-0 md:mt-0 ">
                  <ul className="items-center justify-center md:flex flex-col md:flex-row gap-7">
                    <li className="text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/">
                        Home
                      </NavLink>
                    </li>

                    <li className="text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/about">
                        About
                      </NavLink>
                    </li>

                    <li className="text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/contact">
                        Contact Us
                      </NavLink>
                    </li>
                    <li className="text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/data">
                       Data
                      </NavLink>
                    </li>

                    <li className="">
                  <DarkModeToggles />
                  </li>
                  </ul>
                </div>

      
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
