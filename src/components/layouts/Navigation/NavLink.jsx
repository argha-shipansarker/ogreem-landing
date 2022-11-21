import React from "react";

const NavLink = ({ label }) => {
  return (
    <li className="block py-2 pl-3 pr-4 rounded md:bg-transparent font-medium text-secondary md:hover:underline underline-offset-8 md:decoration-2 cursor-pointer">
      {label}
    </li>
  );
};

export default NavLink;
