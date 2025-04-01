import React from "react";
import { Link } from "react-scroll";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../../hooks";
import { FaCode } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 dark:bg-gray-900 text-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
            spy={true}
            // offset={-40}
            activeClass="active"
          >
            <FaCode size={32} />
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link
            to="home"
            spy={true}
            smooth={"easeInOutQuint"}
            duration={500}
            offset={-40}
            activeClass="text-blue-600 dark:text-blue-300 font-bold underline"
            className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={"easeInOutQuint"}
            duration={500}
            offset={-40}
            // className="cursor-pointer hover:underline"
            activeClass="text-blue-600 dark:text-blue-300 font-bold underline"
            className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400"
            /* activeStyle={
              "block py-2 pr-4 pl-3 text-blue-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-yellow-400 md:dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            } */
          >
            About
          </Link>
          <Link
            to="skillset"
            spy={true}
            smooth={"easeInOutQuad"}
            duration={500}
            // className="cursor-pointer hover:underline"
            /* className="block py-2 pr-4 pl-3 text-blue-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-yellow-400 md:dark:hover:text-yellow-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            activeClass="text-yellow-400 font-bold" */
            activeClass="text-blue-600 dark:text-blue-300 font-bold underline"
            className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400"
            offset={-40}
          >
            Skills
          </Link>
          {/* <Link
            to="experience"
            spy={true}
            smooth={"easeInOutQuad"}
            duration={500}
            offset={-40}
            activeClass="text-blue-600 dark:text-blue-300 font-bold underline"
            className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400"
          >
            Experience
          </Link> */}
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            duration={500}
            offset={-40}
            activeClass="text-blue-600 dark:text-blue-300 font-bold underline"
            className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400"
          >
            Testimonials
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            // offset={-40}
            activeClass="text-blue-600 dark:text-blue-300 font-bold underline"
            className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            // offset={30}
            activeClass="text-blue-600 dark:text-blue-300 font-bold underline"
            className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400"
          >
            Contact
          </Link>
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleTheme}
            size={24}
            sunColor="yellow"
            moonColor="white"
          />
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
