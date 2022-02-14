import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}> {title} </li>;
};
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="flex w-full p-2 md:justify-center items-center justify-between">
      <div className="flex-initial justify-center items-center md:flex-[0.5] pt-2 sm:px-3">
        <p className="logo text-white cursor-pointer text-lg">CRYPTOFY</p>
      </div>
      <ul className="list-none pt-2 sm:px-3 text-white space-x-4 md:flex hidden  flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, i) => (
          <NavbarItem key={i} title={item} />
        ))}
        <li className="bg-[#2952e3] rounded-full py-2 px-7 cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggle ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => settoggle(!toggle)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => settoggle(!toggle)}
          />
        )}

        {toggle && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => settoggle(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, i) => (
              <NavbarItem
                key={i}
                title={item}
                classProps="my-2 text-lg text-white"
              />
            ))}
            <li className="bg-[#2952e3] rounded-full py-2 px-7 cursor-pointer hover:bg-[#2546bd]">
              Login
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
