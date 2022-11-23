import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ label, path }) => {
    return (
        <li>
            <Link to={path} className="block py-2 pl-3 pr-4 rounded md:bg-transparent font-medium text-secondary md:hover:underline underline-offset-8 md:decoration-2 cursor-pointer">
                {label}

            </Link>
        </li>
    );
};

export default NavLink;
