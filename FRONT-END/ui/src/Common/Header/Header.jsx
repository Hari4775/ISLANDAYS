import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import { logoIcon } from '../../assets/Index';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (isMenuOpen && !event.target.closest('.navbar-menu')) {
  //       setIsMenuOpen(false);
  //     }
  //   };

  //   if (isMenuOpen) {
  //     document.addEventListener('click', handleOutsideClick);
  //   } else {
  //     document.removeEventListener('click', handleOutsideClick);
  //   }

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     document.removeEventListener('click', handleOutsideClick);
  //   };
  // }, [isMenuOpen]);

  return (
    <div className="navbar-container py-5 mx-auto" id="main-header">
      <nav className="relative navbar flex justify-between items-center bg-white w-11/12 lg:mx-14 mx-auto rounded-lg" style={{ padding: '15px' }}>
        <Link className="text-3xl font-bold leading-none" to="/">
          <img className="h-10" src={logoIcon} alt="Logo" />
        </Link>
        <div className="lg:hidden">
          {/* <button className="navbar-burger flex items-center p-3" onClick={toggleMenu}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button> */}
        </div>
        <ul className="nav-texts hidden lg:flex lg:mx-auto lg:items-end lg:w-auto lg:space-x-7">
          <li><Link className="pc-nav-text font-semibold" to="/about_us">Book Permit</Link></li>
          <li><Link to="/packages" className="pc-nav-text font-semibold">Packages</Link></li>
          <li><Link className="pc-nav-text font-semibold" to="/talk_to_us">Contact Us</Link></li>
        </ul>
      </nav>
      {isMenuOpen && (
        <div className="navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMenu}></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <button className="navbar-close" onClick={toggleMenu}>
                <svg className="h-6 w-6 fill-current text-gray-900" viewBox="0 0 24 24">
                  <path d="M18.36 6.64a1 1 0 010 1.41L13.41 12l4.95 4.95a1 1 0 11-1.41 1.41L12 13.41l-4.95 4.95a1 1 11-1.41-1.41L10.59 12 5.64 7.05a1 1 111.41-1.41L12 10.59l4.95-4.95a1 1 011.41 0z"></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <Link className="nav-text block p-4 rounded" to="/products" id="cart-count">Product</Link>
                </li>
                <li className="mb-1">
                  <Link className="nav-text block p-4 rounded" to="/pricing">Pricing</Link>
                </li>
                <li className="mb-1">
                  <Link className="nav-text block p-4 rounded" to="/about_us">About Us</Link>
                </li>
                <li className="mb-1">
                  <Link className="nav-text block p-4 rounded" to="/careers">Careers</Link>
                </li>
                <li className="mb-1">
                  <Link className="nav-text block p-4 rounded" to="/talk_to_us">Talk to Us</Link>
                </li>
                <li className="my-10">
                  <Link className="login-button p-4 mt-10 text-lg text-center rounded-full" to="/login_register">Login/Register</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
