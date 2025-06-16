import { GoArrowUpRight } from "react-icons/go";
import {motion} from "framer-motion"

const Project = ({ index, title, setModal, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="block w-full"
    >
      <main className="w-full lg:h-[10vw] h-[35vw] text-white bg-black flex items-center justify-between border-t border-gray-900 hover:bg-[#111111] hover:text-gray-400 transition-all duration-300 lg:px-6 px-3 cursor-pointer lg:text-2xl text-md hover:text-3xl">
        <motion.div initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}>{title}</motion.div>
        <motion.h2 initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}  className="flex items-center transition-all duration-300 gap-2 justify-center lg:text-2xl text-base relative  hover:scale-75 hover:text-gray-500">
          View <GoArrowUpRight />
        </motion.h2>
      </main>
    </a>
  );
};

export default Project;
