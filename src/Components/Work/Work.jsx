import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Software from "./../Software/Software";

export default function Work() {
  return (
    <section className="container mx-auto px-[15%] py-[6%]">
      <div className="grid grid-rows-1 gap-4 mb-8">
        <h6 className="text-gray-400 font-thin font-sans tracking-wider">
          MY WORK
        </h6>
        <h1 className="font-serif tracking-widest font-bold">RECENT WORK</h1>
        <div className="flex gap-8">
        <NavLink to="graphic-design" className=" font-sans tracking-wider">
          Graphic Design
        </NavLink>
        <NavLink to="apps" className=" font-sans tracking-wider">
          Apps
        </NavLink>
        <NavLink to="software" className=" font-sans tracking-wider">
          Software
        </NavLink>
        </div>
      </div>
      <div className="">
        <Outlet />
      </div>
    </section>
  );
}
