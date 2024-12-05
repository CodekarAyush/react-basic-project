import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { toggleTheme } from "../store/slices/themeSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
      } transition-all`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Flowbite
          </span>
        </a>
        <div className="flex items-center space-x-4">
         
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <ul
            className={`flex flex-col font-medium md:flex-row md:space-x-8 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <li>
              <Link to={"/"}
                className="block py-2 px-3 hover:text-blue-500 dark:hover:text-blue-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
              to={"/todo"}
                className="block py-2 px-3 hover:text-blue-500 dark:hover:text-blue-300"
              >
                Todo
              </Link>
            </li>
            <li>
              <Link 
                to={"/wheather"}
                className="block py-2 px-3 hover:text-blue-500 dark:hover:text-blue-300"
              >
                Wheather
              </Link>
            </li>
            <li>
              <Link
    to={"/contact-us"}
                className="block py-2 px-3 hover:text-blue-500 dark:hover:text-blue-300"
              >
                Contact us
              </Link>
            </li>
            {/* Add other menu items */}
          <button
            onClick={handleThemeToggle}
            className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300 focus:outline-none"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
          </ul>
        </div>
      </div>

      {/* Responsive Menu for Small Screens */}
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          className={`absolute top-0 left-0 w-3/4 h-screen z-50 p-5 ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-blue-500 focus:outline-none mb-5"
          >
            Close
          </button>
          <ul className="space-y-4">
            <li>
              <a href="#" className="block text-lg hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-lg hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block text-lg hover:text-blue-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="block text-lg hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Header;
