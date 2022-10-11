import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import LInk from "../Link/Link";

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
    <nav className="w-full bg-slate-500 py-3 mb-10">
      <div
        onClick={() => setOpen(!open)}
        className=" bg-slate-500 h-6 w-6 md:hidden "
      >
        {/* {open ? <XMarkIcon /> : <Bars3Icon />} */}
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      <ul
        className={`bg-slate-500 md:flex w-full justify-end absolute duration-500 md:static  ${
          open ? "top-6" : "top-[-140px]"
        }`}
      >
        <li className="mr-[65%]">Quizone Max </li>
        {routes.map((route) => (
          <LInk key={route.id} route={route}></LInk>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
