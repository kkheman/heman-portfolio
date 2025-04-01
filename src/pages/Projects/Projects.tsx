import React from "react";
import WordPad from "../../assets/wordpad.png";

const soloProjects = [
  {
    id: 1,
    title: "WordPad - Text editor",
    img: WordPad,
    description: "Online text editor, notes taker with speech to text feature.",
    technologies: "React | Typescript | MaterialUI",
    link: "https://wordpad.netlify.app/",
    github: "https://github.com/bhuvanbalasubramanian/wordpad",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-sky-100 to-slate-100 text-black dark:from-gray-900 dark:via-sky-900 dark:to-cyan-800 dark:text-white flex justify-center items-center"
  >
    <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3 place-content-center">
      {soloProjects.map((project) => (
        <div className="rounded-md border border-neutral-800 bg-gradient-to-br from-violet-100 via-blue-100 to-teal-50 dark:from-slate-800 dark:via-neutral-700 dark:to-zinc-800 p-8 text-center shadow">
          <img
            src={project.img}
            alt={project.title}
            className=" object-cover rounded-t-xl"
          />
          <h3 className="text-xl py-4">{project.title}</h3>
          <p className=" italic py-2">{project.description}</p>
          <p className="py-2">{project.technologies}</p>
          <div className="place-content-center py-2.5 mt-4">
            <a
              href={project.github}
              target="_blank"
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              rel="noreferrer"
            >
              Source
            </a>
            <a
              href={project.link}
              target="_blank"
              className="text-white bg-gradient-to-br from-cyan-400 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export { Projects };
