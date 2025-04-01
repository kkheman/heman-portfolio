import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { Tile } from "../../components/Tile";
import Cert from "../../assets/SM.png";

const SkillSet = () => (
  <section
    id="skillset"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-sky-100 to-slate-100 text-black dark:from-gray-900 dark:via-sky-900 dark:to-cyan-800 dark:text-white flex justify-center items-center"
  >
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Tile icon={<FaHtml5 />} title="HTML5" />
        <Tile icon={<IoLogoJavascript />} title="JavaScript" />
        <Tile icon={<FaCss3Alt />} title="CSS3" />
        <Tile icon={<FaReact />} title="React" />
        <Tile icon={<SiExpress />} title="ExpressJs" />
        <Tile icon={<SiMongodb />} title="MongoDB" />
        <Tile icon={<FaNodeJs />} title="NodeJs" />
        <Tile icon={<FaGithub />} title="GitHub" />
        <Tile
          icon={<img src={Cert} alt="" width="64" height="64" />}
          title="Scrum Master"
        />
      </div>
    </div>
  </section>
);
export { SkillSet };
