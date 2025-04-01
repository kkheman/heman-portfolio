import React from "react";
import { FaGithub, FaRegEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import contact from "../../assets/contact.svg";

const Contact = () => (
  <section
    id="contact"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-sky-100 to-slate-100 text-black dark:from-gray-900 dark:via-sky-900 dark:to-cyan-800 dark:text-white flex justify-center items-center"
  >
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <p className="text-4xl font-bold text-teal-500 bg-gradient-to-r from-slate-600 to-gray-800 dark:from-slate-50 dark:to-stone-400 bg-clip-text text-transparent">
        Get in touch
      </p>
      <img
        src={contact}
        alt=""
        className="object-cover rounded-t-xl text-teal-500 fill-current"
      />
    </div>
    <div className="align-center justify-center mt-4">
      <a
        className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 rounded-full hover:text-slate-600 dark:hover:text-white  transition-colors duration-100"
        href="https://github.com/kkheman"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={48} />
        <span className="sr-only">Github</span>
      </a>
      <a
        className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500  rounded-full hover:text-blue-600 dark:hover:text-white  transition-colors duration-100"
        href="https://www.linkedin.com/in/heman-babu-kendai-20973817/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={48} />
        <span className="sr-only">Twitter</span>
      </a>
      <a
        className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 rounded-full hover:text-green-400 dark:hover:text-white transition-colors duration-100"
        href={
          "https://mail.google.com/mail/?view=cm&fs=1&to=" +
          "heman.babu@gmail.com"
        }
        target="_blank"
        rel="noreferrer"
      >
        <FaRegEnvelope size={48} />
        <span className="sr-only">Email</span>
      </a>
    </div>
  </section>
);

export { Contact };
