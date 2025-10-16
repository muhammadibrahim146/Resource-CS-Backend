// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import logo from '../assets/logo.png'

// function Footer() {
//   return (
//     <div className="lastgreencont w-full text-black flex justify-between items-center relative flex-col gap-[50px] py-10 px-[9px] bg-[linear-gradient(to_left_bottom,#00d4ff,#d000ff)]">
//                             <div className="lastgreencon z-[10] flex items-center justify-between gap-[120px]">
//                                 <div className="first w-[290px]">
//                                     <NavLink to={''} >
//                                         <img
//                                             className="logof mb-2.5 ancr h-24 drop-shadow-[0_0_5px_black]"
//                                             src={logo}
//                                             alt="logo"
//                                         />
//                                     </NavLink>
//                                     <p className='text-black text-[1rem] font-[500]'>Empowering Computer Science students with curated resources and real-time opportunities.</p>
//                                 </div>
//                                 <div className="sec">
//                                     <NavLink to={''} className="lastlinks ancr text-black block font-[900] text-[1.9rem] w-[330px] leading-[50px] uppercase transition-all duration-400 ease-in-out hover:cursor-pointer hover:text-white">
//                                         CAREER PATHS
//                                     </NavLink>
//                                     <NavLink to={''} className="lastlinks ancr text-black block font-[900] text-[1.9rem] w-[330px] leading-[50px] uppercase transition-all duration-400 ease-in-out hover:cursor-pointer hover:text-white">
//                                         ROADMAPS
//                                     </NavLink>
//                                     <NavLink to={''} className="lastlinks ancr text-black block font-[900] text-[1.9rem] w-[330px] leading-[50px] uppercase transition-all duration-400 ease-in-out hover:cursor-pointer hover:text-white">
//                                         RESOURCES
//                                     </NavLink>
//                                 </div>
//                                 <div className="third">
//                                     <NavLink to={''} className="lastlinks ancr text-black block font-[900] text-[1.9rem] w-[330px] leading-[50px] uppercase transition-all duration-400 ease-in-out hover:cursor-pointer hover:text-white">
//                                         TECH EVENTS
//                                     </NavLink>
//                                     <NavLink to={''} className="lastlinks ancr text-black block font-[900] text-[1.9rem] w-[330px] leading-[50px] uppercase transition-all duration-400 ease-in-out hover:cursor-pointer hover:text-white">
//                                         COMMUNITY
//                                     </NavLink>
//                                     <NavLink to={''} className="lastlinks ancr text-black block font-[900] text-[1.9rem] w-[330px] leading-[50px] uppercase transition-all duration-400 ease-in-out hover:cursor-pointer hover:text-white">
//                                         CONTACT US
//                                     </NavLink>
//                                 </div>
//                             </div>
//                             <div className='h-[1px] w-[85%] mb-[-30px] bg-black'></div>
//                             <div className="lastline text-[0.9rem] font-[500]">
//                                 © 2025 Resource.CS. Made with ❤️ for CS Students.
//                             </div>
//                         </div>
//   )
// }

// export default Footer



// ----------------



import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="w-full text-black flex flex-col items-center gap-10 py-10 px-4 sm:px-8 bg-[linear-gradient(to_left_bottom,#00d4ff,#d000ff)]">
      {/* Top Section */}
      <div className="z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-28 w-full max-w-6xl">
        {/* Logo + Text */}
        <div className="w-full lg:w-[290px] text-center lg:text-left">
          <NavLink to={""}>
            <img
              className="mb-3 h-20 sm:h-24 mx-auto lg:mx-0 drop-shadow-[0_0_5px_black]"
              src={logo}
              alt="logo"
            />
          </NavLink>
          <p className="text-black text-sm sm:text-base font-medium">
            Empowering Computer Science students with curated resources and
            real-time opportunities.
          </p>
        </div>

        {/* Middle Links */}
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <NavLink
            to={""}
            className="text-black font-extrabold text-xl sm:text-2xl uppercase leading-[2.5rem] transition-all duration-300 ease-in-out hover:text-white"
          >
            CAREER PATHS
          </NavLink>
          <NavLink
            to={""}
            className="text-black font-extrabold text-xl sm:text-2xl uppercase leading-[2.5rem] transition-all duration-300 ease-in-out hover:text-white"
          >
            ROADMAPS
          </NavLink>
          <NavLink
            to={""}
            className="text-black font-extrabold text-xl sm:text-2xl uppercase leading-[2.5rem] transition-all duration-300 ease-in-out hover:text-white"
          >
            RESOURCES
          </NavLink>
        </div>

        {/* Right Links */}
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <NavLink
            to={""}
            className="text-black font-extrabold text-xl sm:text-2xl uppercase leading-[2.5rem] transition-all duration-300 ease-in-out hover:text-white"
          >
            TECH EVENTS
          </NavLink>
          <NavLink
            to={""}
            className="text-black font-extrabold text-xl sm:text-2xl uppercase leading-[2.5rem] transition-all duration-300 ease-in-out hover:text-white"
          >
            COMMUNITY
          </NavLink>
          <NavLink
            to={""}
            className="text-black font-extrabold text-xl sm:text-2xl uppercase leading-[2.5rem] transition-all duration-300 ease-in-out hover:text-white"
          >
            CONTACT US
          </NavLink>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-[90%] bg-black"></div>

      {/* Bottom Line */}
      <div className="text-xs sm:text-sm font-medium text-center">
        © 2025 Resource.CS. Made with ❤️ for CS Students.
      </div>
    </div>
  );
}

export default Footer;
