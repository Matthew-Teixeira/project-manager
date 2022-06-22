import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="h-20 px-4 bg-[#3b3b3b] text-[#30cad5] font-bold">
      <div className="flex justify-between items-center mx-auto max-w-[1240px]">
        <div className="flex items-center w-full">
          <div className="text-center text-3xl">
            <h1>Manage</h1>
            <h1>- It -</h1>
          </div>
          <div className="md:flex justify-between w-full hidden">
            <ul className="flex">
              <li className="p-4">Home</li>
              <li className="p-4">Clients</li>
              <li className="p-4">Projects</li>
            </ul>
            <div className="flex items-center">
              <ul className="flex">
                <li className="p-4">Login</li>
                <li className="p-4">Logout</li>
                <li className="p-4">Register</li>
              </ul>
            </div>
          </div>
          <div className="ml-auto block md:hidden" onClick={handleNav}>
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-[150px] bg-[#3b3b3b] h-full ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="text-center text-3xl">
          <h1>Manage</h1>
          <h1>- It -</h1>
        </div>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Clients</li>
          <li className="p-4 border-b border-gray-600">Projects</li>
          <li className="p-4 border-b border-gray-600">Login</li>
          <li className="p-4 border-b border-gray-600">Logout</li>
          <li className="p-4">Register</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;