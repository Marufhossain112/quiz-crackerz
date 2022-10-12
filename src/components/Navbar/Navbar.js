import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import LInk from "../Link/Link";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Statistics",
      path: "/statistics",
    },
    {
      id: 3,
      name: "Blog",
      path: "/blog",
    },
  ];
  return (
    <nav className="w-full  py-3 mb-10 navbar-home shadow-xl">
      <div onClick={() => setOpen(!open)} className="  h-6 w-6 md:hidden ">
        {/* {open ? <XMarkIcon /> : <Bars3Icon />} */}
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      <ul
        className={` md:flex w-full justify-end absolute duration-500 md:static  ${
          open ? "top-6" : "top-[-140px]"
        }`}
      >
        <li className="mr-[60%] font-bold text-2xl logo">
          <span className="text-green-500 text-3xl">Q</span>ui
          <span className="text-violet-700 text-3xl">Z</span>one
          <span className="text-red-500 text-3xl"> M</span>ax
        </li>
        {routes.map((route) => (
          <LInk key={route.id} route={route}></LInk>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
