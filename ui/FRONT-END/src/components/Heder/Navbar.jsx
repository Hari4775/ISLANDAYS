import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { logo, menu, close, islandDaysLogo } from "../../assets";
import { logo_name } from "../../constants";
import { cn } from "../../utils/lib";

// Navbar
const Navbar = () => {
  // state variables
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-5 fixed top-0 z-10 bg-transparent border-b border-white border-opacity-5 backdrop-blur-sm"
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={islandDaysLogo} alt="Logo" className="w-20 h-20 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            &nbsp;<span className="sm:block hidden"></span>
          </p>
        </Link>

        {/* Nav Links (Desktop) */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={cn(
                active === link.title ? "text-white" : "text-gray-400",
                "hover:text-white text-[18px] font-medium cursor-pointer"
              )}
              onClick={() => !link?.link && setActive(link.title)}
            >
              {link?.link ? (
                <a href={link.link} target="_blank" rel="noreferrer noopener">
                  {link.title}
                </a>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={cn(
              !toggle ? "hidden" : "flex",
              "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 w-full  h-52 z-10 rounded-xl"
            )}
          >
            {/* Nav Links (Mobile) */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={cn(
                    active === link.title ? "text-red-700" : "text-blue-700",
                    "font-poppins font-medium cursor-pointer text-[16px]"
                  )}
                  onClick={() => {
                    !link?.link && setToggle(!toggle);
                    !link?.link && setActive(link.title);
                  }}
                >
                  {link?.link ? (
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
