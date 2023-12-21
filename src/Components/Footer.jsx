import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-scroll";
import myImg from "../Images/MY_PIC-removebg.png";

const Footer = () => {
  return (
    <div className="lg:py-20 lg:mt-20 mt-10 py-[60px]">
      <div className="w-full lg:w-[1130px] border border-gray-700 mb-10"></div>

      <div className="lg:block hidden lg:text-[100px]  font-bold text-center text-white relative">
        <h1>LET'S WORK </h1>
        <br />
        <p className="-mt-[180px] mb-10 -ml-6">
          T<span className="ml-4 -mr-2">O</span> <span>GETHER</span>
        </p>
      </div>
      <div className=" lg:block hidden absolute translate-x-[340px] -ml-3 -mr-2   -translate-y-[150px] z-10">
        <img src={myImg} alt="backgroundImg" className="mypic" />
      </div>
      <div className="flex justify-between items-center -mb-10 mt-14 ">
        <Link
          to="herosection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img
            src={logo}
            alt="logo"
            className="lg:w-[200px] lg:block hidden  w-[130px] lg:px-0 px-[12px] cursor-pointer"
          />
        </Link>

        <div className=" flex items-center justify-center mx-auto"> <h1 className="lg:hidden block text-gray-400 text-[15px] text-center">© Akash Chavan. All rights reserved</h1></div>

        <div className="lg:block hidden lg:space-x-10 lg:text-[15px] text-[12px] space-x-5 lg:px-0 px-[12px]">
          <Link
            to="herosection"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-white font-semibold hover:text-lime-400 transition duration-300 ease-in-out cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-white font-semibold hover:text-lime-400 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => console.log("Clicked on About")}
          >
            About
          </Link>

          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-white font-semibold hover:text-lime-400 transition duration-300 ease-in-out cursor-pointer"
          >
            Skills
          </Link>

          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            to="projects"
            className="text-white font-semibold hover:text-lime-400 transition duration-300 ease-in-out cursor-pointer"
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
