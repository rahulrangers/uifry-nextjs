"use client";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const Navlinks = () => {
  return (
    <>
      <div className="m-5 mb-0 text-[26px] font-bold hover:text-orange-500"> Home</div>
      <div className="m-5 mb-0 text-[26px] font-bold hover:text-orange-500"> AboutUs</div>
      <div className="m-5 mb-0 text-[26px] font-bold hover:text-orange-500"> Pricing</div>
      <div className="m-5 mb-10 text-[26px] font-bold hover:text-orange-500"> Features</div>
    </>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="shadow-md fixed top-0 left-0 right-0 bg-white z-50">

      <div className="font-style flex justify-center md2:inline ">
      <div className="flex md2:hidden justify-center mx-5">
          <img
            className="my-5 w-[40px] h-[40px] md2:ml-10 md2:mr-0 mx-2 text-[26px]"
            src={"https://iili.io/Jb1Dle4.png"}
            alt="logo"
          />
          <div className="mt-5  text-[26px] font-extrabold">uifry™</div>
        </div>
        <div className="md2:flex justify-between items-center  w-screen ">
          <div className="md2:flex hover:cursor-pointer hidden">
          <div className="flex">
          <img
            className="my-5 w-[40px] h-[40px] md2:ml-10 md2:mr-0 mx-2 text-[26px]"
            src={"https://iili.io/Jb1Dle4.png"}
            alt="logo"
          />
          <div className="md2:mt-5 mx-2  md2:mr-14 md2:ml-1 text-[26px] font-extrabold">uifry™</div>
        </div>
            <Navlinks />
          </div>
          <div className="flex justify-end items-center sm:mb-5  ">
            <a href="/" className=" text-white bg-black py-2 px-5 rounded-md hidden md2:flex  hover:bg-red-500">
              {" "}
              Download
            </a>
            <button onClick={toggleNavbar}>
              {!isOpen ? (
                <IoMenu className="flex justify-end w-[50px] h-[50px] md2:hidden m-5" />
              ) : (
                <IoCloseSharp className="flex justify-end w-[50px] h-[50px] md2:hidden m-5" />
              )}
            </button>
          </div>
          <div className="mr-24 my-2">
            <img className="my-5  text-[26px] hidden md2:flex" src={"https://iili.io/JbE3pDu.png"} alt="logo" />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="nav-links"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md2:hidden flex flex-col items-center font-style"
          >
            <Navlinks />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
