import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const navLinks = [
    { id: 1, text: "Home", hash: "#hero" },
    { id: 2, text: "About", hash: "#about" },
    { id: 3, text: "Work", hash: "#work" },
    { id: 4, text: "Contact", hash: "#contact" },
  ];

  const menuVariants = {
    open: {
      clipPath: "circle(150% at 50% 50%)",
      transition: { type: "spring", stiffness: 20 },
    },
    closed: {
      clipPath: "circle(0px at 50% 50%)",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  return (
    <>
      {/* Blurred Circle Animation */}
      <div
        className="fixed top-[-20%] left-[-10%] w-[300px] h-[300px] bg-purple-800 rounded-full blur-3xl opacity-50 z-10 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <header  className="fixed top-0 left-0 w-full  z-50 text-white  backdrop-blur-md bg-black/10 ">
        <motion.div initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Satyam.dev</h1>

          {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-lg">
  {navLinks.map(({ id, text, hash }) => (
    <a
      key={id}
      href={hash}
      className="relative inline-block px-1 py-2 group overflow-hidden"
    >
      {/* Default Text */}
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
        {text}
      </span>

      {/* Swipe-Up Text */}
      <span className="absolute left-0 top-full block text-[#39ff14] transition-transform duration-300 group-hover:translate-y-[-100%]">
        {text}
      </span>

      {/* Bottom Border Animation */}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39ff14] transition-all duration-300 group-hover:w-full"></span>
    </a>
  ))}
</nav>


          {/* Mobile Menu Button */}
          <div className="md:hidden z-50" onClick={() => setMenu(!menu)}>
            {menu ? <IoMdClose size={30} /> : <CgMenuRight size={30} />}
          </div>
        </motion.div>

        {/* Mobile Fullscreen Menu */}
        <motion.div
          initial={false}
          animate={menu ? "open" : "closed"}
          variants={menuVariants}
          className="fixed top-0 left-0 w-full h-screen bg-gradient-to-tr from-[#4B0082] via-[#2C003E] to-black flex items-center justify-center md:hidden z-40"
        >
          {menu && (
            <motion.ul  initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}className="flex flex-col items-center gap-8 text-2xl font-semibold">
              {navLinks.map(({ id, text, hash }) => (
                <li key={id}>
                  <a
                    href={hash}
                    className="hover:text-purple-300 transition"
                    onClick={() => setMenu(false)}
                  >
                    {text}
                  </a>
                </li>
              ))}
              <a
                href="/SatyamChaurasiya.pdf" download
                className="mt-8 px-6 relative z-[99999990] text-base py-2 rounded-full text-white bg-purple-700 hover:bg-purple-500 transition-all"
              >
                Download CV
              </a>
            </motion.ul>
          )}
        </motion.div>
      </header>
    </>
  );
};

export default Header;
