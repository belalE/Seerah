import React from "react";

const NavItem = (props) => {
  return (
    <li className="mr-6">
      <a
        href={props.link}
        className="text-gray-50 p-2 hover:bg-green-600 rounded-xl"
      >
        {props.children}
      </a>
    </li>
  );
};

export default NavItem;
