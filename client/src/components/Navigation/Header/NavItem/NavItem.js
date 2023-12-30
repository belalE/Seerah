import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className="mr-6">
      <Link
        className="text-gray-50 p-2 hover:bg-green-600 rounded-xl"
        to={props.link}
      >
        {props.children}
      </Link>
    </li>
  );
};

export default NavItem;
