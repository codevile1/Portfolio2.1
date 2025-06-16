import { SiCodeigniter, SiDoubanread } from "react-icons/si";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import TechStack from "./MytechS";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.4 }}
      id="about"
      className="w-full relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16"
    >
      {/* First icon - smaller, right side */}
      <div className="absolute  top-[10%] lg:top-[20%] left-[70%] text-red-500 text-6xl  animate-pulse drop-shadow-[0_0_15px_#ff0000] rotate-[15deg]">
        <SiCodeigniter />
      </div>

      {/* Second icon - bigger, left side, opposite rotation */}
      <div className="absolute -z-0 top-[30%] left-[10%] text-red-500 text-8xl animate-pulse duration-250 drop-shadow-[0_0_20px_#ff0000] -rotate-[25deg]">
        <SiCodeigniter />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-5xl sm:text-6xl md:text-7xl   lg:text-9xl font-bold mb-6 text-left w-full  max-w-8xl  mx-auto leading-none  flex  gap-3 items-center justify-left"
      >
        <SiDoubanread className="mt-3 text-[#39ff14] " />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Ab
          <span className="mt-3 text-[#39ff14] border-2 rounded-full border-dashed">
            o
          </span>
          ut
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-5xl z-10   w-full mx-auto px-4 text-left text-base sm:text-xl md:text-2xl lg:text-4xl font-light uppercase space-y-4 leading-none  "
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:text-2xl "
        >
          Hola ! I'm{" "}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:text-7xl font-extrabold text-4xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text"
        >
          {"< Satyam Chaurasiya / >"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I create interactive
          <video
            src="./1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="inline-block mx-2 h-[1.2em] aspect-video object-cover rounded-full shadow"
          />
          modern web experiences
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          That look great
          <video
            src="./2.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="inline-block mx-2 h-[1.2em] aspect-video object-cover rounded-full shadow"
          />
          and feel even better.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Clean code, smooth animations,
          <video
            src="./3.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="inline-block mx-2 h-[1.2em] aspect-video object-cover rounded-full shadow"
          />
          and a touch of
          <motion.video
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            src="./4.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="inline-block mx-2 h-[1.2em] aspect-video object-cover rounded-full shadow"
          />
          creativity—that’s my style.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="w-full flex lg:justify-end justify-center text-end  mt-2.5 lg:mr-40 "
      >
        <Link
          to="/more-about"
          className="group relative overflow-hidden text-white flex items-center justify-end w-fit gap-4 px-4 lg:px-8 py-2 lg:py-5 rounded-4xl border-2 border-dashed border-[#39ff14] transition-all duration-300 cursor-pointer"
        >
          {/* BG Hover Overlay */}
          <span className="absolute bottom-0 left-0 w-full h-0 bg-amber-100 group-hover:h-full transition-all duration-500 ease-in-out z-0" />

          {/* Content */}
          <span className="relative z-10 flex items-center gap-4 transition-all duration-300 group-hover:text-black ">
            Learn more
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12">
              <BsArrowUpRight />
            </span>
          </span>
        </Link>
        <div></div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative  mt-7 block text-xl font-bold group cursor-pointer"
      >
        <span className="after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#79519E] after:transition-all after:duration-500 group-hover:after:w-full">
          MY Creative techstack ❤️
        </span>
      </motion.p>

      <TechStack />
    </motion.div>
  );
};

export default About;
