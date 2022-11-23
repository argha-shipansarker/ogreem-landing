import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo.svg";

const links = [
  { label: "About Us", path: "about" },
  { label: "Earned wage access", path: "earned-wage-access" },
  { label: "How to use?", path: "how-to-use" },
  { label: "Team", path: "#" },
  { label: "Contact", path: "#" },
];

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownClass, setDropdownClass] = useState(
    "hidden w-full md:block md:w-auto"
  );
  const dropdownRef = useRef(null);
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <Link to="/">
          <img src={NavLogo} className="h-6 mr-3 sm:h-9" alt="ogreem Logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center bg-secondary p-2 ml-3 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={dropdown}
          onClick={() => {
            setDropdown((d) => !d);
            setDropdownClass((dc) =>
              dc.includes("hidden") ? dc.replace("hidden", "") : dc + " hidden"
            );
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div ref={dropdownRef} className={dropdownClass} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            {links.map((link) => (
              <NavLink key={link.label} label={link.label} path={link.path} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
