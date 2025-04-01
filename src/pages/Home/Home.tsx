import React from "react";
import Dev from "../../assets/web-developer.svg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-sky-100 to-slate-100 text-black dark:from-gray-900 dark:via-sky-900 dark:to-cyan-800 dark:text-white flex justify-center items-center"
  >
    <div id="home-div" className="h-screen w-3/6">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="small-screen hidden">
          <img
            src={Dev}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>

        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-transparent bg-gradient-to-r from-slate-600 to-stone-900 bg-clip-text dark:from-slate-300 dark:to-neutral-500">
            I'm a FrontEnd Developer
          </h2>
          <div className="text-black py-4 max-w-full dark:text-gray-400">
            <Typewriter
              words={[
                " I have experience in building websites, enterprise web applications and designing software. I love to work on web application using MERN & MEAN stacks.",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={30}
              deleteSpeed={70}
              delaySpeed={100}
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <img
        src={Dev}
        alt="profile"
        className="rounded-2xl mx-auto w-2/3 md:w-full"
      />
    </div>
  </section>
);

export { Home };
