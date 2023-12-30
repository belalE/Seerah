import React from "react";
import NavItem from "./NavItem/NavItem";

const Header = () => {
  return (
    <header className="bg-green-900 text-white">
      <nav>
        <ul className="flex flex-row p-3">
          <h2 className="mr-6 font-extrabold text-xl">Seerah</h2>
          <NavItem link="/">Home</NavItem>
          <NavItem link="/about">About</NavItem>
          <NavItem link="/people">People</NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
