import React from "react";

const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-sky-100 to-slate-100 text-black dark:from-gray-900 dark:via-sky-900 dark:to-cyan-800 dark:text-white flex justify-center items-center"
  >
    <div id="about">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am a React Developer, Certified Scrum Master passionate about
          building user-centric digital experiences and fostering
          high-performing agile teams. With a robust technical foundation and a
          deep understanding of agile methodologies, I bridge the gap between
          technology and business needs to deliver innovative, scalable, and
          impactful solutions.
        </p>

        <br />

        <p className="text-xl">
          As a React Developer, I specialize in creating dynamic, responsive,
          and accessible front-end applications. My expertise lies in leveraging
          modern technologies like React, TypeScript, and Tailwind CSS to craft
          seamless user interfaces with exceptional performance. In my role as a
          Scrum Master, I guide teams through the agile process, ensuring smooth
          communication, continuous improvement, and successful sprint
          deliveries. My leadership fosters collaboration and empowers teams to
          meet deadlines without compromising quality.
        </p>
        <br />
        <p className="text-xl">
          In my role as a Scrum Master, I guide teams through the agile process,
          ensuring smooth communication, continuous improvement, and successful
          sprint deliveries. My leadership fosters collaboration and empowers
          teams to meet deadlines without compromising quality.
        </p>
        <br />
        <p className="text-xl">
          Also, I play as a role of Product Owner, I excel at prioritizing
          features, understanding user needs, and managing product backlogs. I
          work closely with stakeholders to define product visions and ensure
          the delivery of maximum value.
        </p>
      </div>
    </div>
  </section>
);

export { About };
