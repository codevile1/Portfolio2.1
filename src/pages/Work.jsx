import { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";
import { BsStars } from "react-icons/bs";
import { FaScissors } from "react-icons/fa6";
import { motion } from "framer-motion";

const Work = () => {
  const projects = [
    {
      title: "Lazarev Website Clone",
      src: "prj1.png",
      color: "yellowgreen",
      link: "https://codevile1.github.io/LazarevWEB/",
    },
    {
      title: "Portfolio v 1.0",
      src: "prj2.png",
      color: "red",
      link: "https://codevile1.github.io/Personal-Portfolio/",
    },
    {
      title: "Sundown Website Clone",
      src: "prj3.png",
      color: "orange",
      link: "https://sundown-clonee.vercel.app/", // Add a link if you have one
    },
    {
      title: "Ochi Website Clone",
      src: "prj4.png",
      color: "#8C8C8C",
      link: "https://ochi-clone-red.vercel.app/",
    },
  ];
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="relative w-full h-full border-b-2 border-dashed border-amber-100"
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-amber-100 text-3xl absolute z-10 -bottom-4 left-[30vw] rotate-y-180"
        >
          <FaScissors />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-left lg:m-10 md:text-left  px-4 md:px-0  flex items-center justify-start "
        >
          <BsStars className="text-[#39ff14] text-9xl opacity-0 lg:opacity-100 " />
          <h1 className="text-[10vw]   md:text-5xl lg:text-8xl font-bold text-white leading-tighter lg:text-left text-center ">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text mr"></span>
            Crafting
            <span className="bg-gradient-to-r ml-2 from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
              E
            </span>
            xperiences <br /> that matter
          </h1>
        </motion.div>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              title={project.title}
              setModal={setModal}
              link={project.link}
            />
          );
        })}

        <Modal modal={modal} projects={projects} />
      </motion.section>
    </>
  );
};

export default Work;
