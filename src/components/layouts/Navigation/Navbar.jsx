import React from "react";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";

const links = [
  { label: "About Us" },
  { label: "Earned wage access" },
  { label: "How to use?" },
  { label: "Team" },
  { label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <NavLogo />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-row space-x-4 sm:order-2 md:order-3">
            {links.map((link) => (
              <NavLink key={link.label} label={link.label} path="#" />
            ))}
          </ul>
        </div>
        {/* <button
          type="button"
          className="inline-flex items-center bg-secondary p-2 ml-3 text-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          // className="rounded bg-secondary p-2.5 text-white text-sm font-medium text-center inline-flex items-center sm:order-3 md:order-2"
        >
          <svg
            className="m-0 md:mr-2 -ml-1 w-6 h-6"
            //   width="24"
            //   height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16.8L6.80002 12M12 16.8L16.8 12M12 16.8V1.59998M21.6 11.2V21.6H2.40002V11.2"
              stroke="white"
              stroke-width="2"
            />
          </svg>
          <span>Download App</span>
        </button> */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center bg-secondary p-2 ml-3 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
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
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
