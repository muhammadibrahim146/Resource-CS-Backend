// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import logo from '../assets/logo.png'
// import { NavLink, useNavigate } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import {useClerk, UserButton, useUser} from '@clerk/clerk-react'

// gsap.registerPlugin(ScrollTrigger);

// function Navbar() {

//     const navigate = useNavigate()
//         const {user} = useUser()
//     const {openSignIn} = useClerk()

//      useEffect(() => {

//       const link = document.createElement("link");
// link.rel = "stylesheet";
// link.href ="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap";
// document.head.appendChild(link);

//         // GSAP animations (ported from original)
//         gsap.to(".navbar", {
//             backgroundColor: "black",
//             duration: 0.5,
//             height: "13.2%",
//             scrollTrigger: {
//                 trigger: ".navbar",
//                 scroller: "body",
//                 start: "top -10%",
//                 end: "top -11%",
//                 scrub: 1,
//             },
//         });

//     }, []);

//   return (
//     <div className="navbar fixed z-[99] flex justify-between items-center sm:px-14 px-2.5 w-full py-1 sm:py-2.5">
//         <div className="logocont h-[97px] w-[186px]">
//                     <img
//                         onClick={() => navigate('/')}
//                         className="logo cursor-pointer hover:h-[94px] transition-all ease-in-out ancr h-24"
//                         src={logo}
//                         alt="logo"
//                         />
//                         </div>
//                 { user ? (<div className="nav flex items-center gap-3 sm:gap-12">
//                     <div className="navitem flex justify-center items-center">
//                         <NavLink to={''} className='text-white text-[1.1rem] transition-all ease-in-out hover:text-[#155dfc]'>CAREER PATHS</NavLink>   
//                     </div>
//                     <div className="navitem flex justify-center items-center">
//                         <NavLink to={''} className='text-white text-[1.1rem] transition-all ease-in-out hover:text-[#155dfc]'>ROADMAPS</NavLink>   
//                     </div>
//                     <div className="navitem flex justify-center items-center">
//                         <NavLink to={''} className='text-white text-[1.1rem] transition-all ease-in-out hover:text-[#155dfc]'>RESOURCES</NavLink>   
//                     </div>
//                     <div className="navitem flex justify-center items-center">
//                         <NavLink to={''} className='text-white text-[1.1rem] transition-all ease-in-out hover:text-[#155dfc]'>TECH EVENTS</NavLink>   
//                     </div>
//                                         <div className="navitem flex justify-center items-center">
//                         <NavLink to={''} className='text-white text-[1.1rem] transition-all ease-in-out hover:text-[#155dfc]'>COMMUNITY</NavLink>   
//                     </div>
//                 </div>) : null}
//                         { user ? <UserButton /> : (<button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-[#155dfc] text-white px-10 py-2.5'>Get started <ArrowRight className='w-4 h-4'/></button> )}
//             </div>
//   )
// }

// export default Navbar


// ------


import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap";
    document.head.appendChild(link);

    // GSAP animation
    gsap.to(".navbar", {
      backgroundColor: "black",
      duration: 0.5,
      height: "13.2%",
      scrollTrigger: {
        trigger: ".navbar",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="navbar fixed z-[99] flex justify-between items-center sm:px-14 px-2.5 w-full py-1 sm:py-2.5">
      {/* Logo */}
      <div className="logocont h-[97px] w-[186px]">
        <img
          onClick={() => navigate("/")}
          className="logo cursor-pointer sm:hover:h-[94px] transition-all ease-in-out ancr sm:h-24 h-20 hover:h-[78px]"
          src={logo}
          alt="logo"
        />
      </div>

      {/* Desktop Links */}
      {user && (
        <div className="nav hidden sm:flex items-center gap-3 sm:gap-12">
          <NavLink
            to={""}
            className="text-white text-[1.1rem] transition-all ease-in-out hover:text-[#155dfc]"
          >
            CAREER PATHS
          </NavLink>
          <NavLink
            to={""}
            className="text-white text-[1.1rem] transition-all ease-in-out hover:text-[#155dfc]"
          >
            ROADMAPS
          </NavLink>
          <NavLink
            to={""}
            className="text-white text-[1.1rem] transition-all ease-in-out hover:text-[#155dfc]"
          >
            RESOURCES
          </NavLink>
          <NavLink
            to={""}
            className="text-white text-[1.1rem] transition-all ease-in-out hover:text-[#155dfc]"
          >
            TECH EVENTS
          </NavLink>
          <NavLink
            to={""}
            className="text-white text-[1.1rem] transition-all ease-in-out hover:text-[#155dfc]"
          >
            COMMUNITY
          </NavLink>
        </div>
      )}

      {/* Right side (desktop: user/auth, mobile: only menu) */}
      <div className="flex items-center gap-3">
        {/* Desktop Auth/User */}
        <div className="hidden sm:block">
          {user ? (
            <UserButton />
          ) : (
            <button
              onClick={openSignIn}
              className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-[#155dfc] text-white px-10 py-2.5"
            >
              Get started <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Mobile menu toggle */}
        {user && (
          <button
            className="sm:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        )}
        {!user && (
          <button
            onClick={openSignIn}
            className="sm:hidden flex items-center gap-2 rounded-full text-sm cursor-pointer bg-[#155dfc] text-white px-6 py-2"
          >
            Get started
          </button>
        )}
      </div>

      {/* Sidebar for Mobile */}
      {user && (
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden z-[100] flex flex-col`}
        >
          {/* Close Button + User at Top */}
          <div className="flex justify-between items-center p-4">
            <UserButton />
            <button onClick={() => setMenuOpen(false)} className="text-white">
              <X />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="flex flex-col items-start px-6 gap-4 mt-4">
            <NavLink
              to={""}
              className="text-white text-[1rem] hover:text-[#155dfc]"
              onClick={() => setMenuOpen(false)}
            >
              CAREER PATHS
            </NavLink>
            <NavLink
              to={""}
              className="text-white text-[1rem] hover:text-[#155dfc]"
              onClick={() => setMenuOpen(false)}
            >
              ROADMAPS
            </NavLink>
            <NavLink
              to={""}
              className="text-white text-[1rem] hover:text-[#155dfc]"
              onClick={() => setMenuOpen(false)}
            >
              RESOURCES
            </NavLink>
            <NavLink
              to={""}
              className="text-white text-[1rem] hover:text-[#155dfc]"
              onClick={() => setMenuOpen(false)}
            >
              TECH EVENTS
            </NavLink>
            <NavLink
              to={""}
              className="text-white text-[1rem] hover:text-[#155dfc]"
              onClick={() => setMenuOpen(false)}
            >
              COMMUNITY
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
