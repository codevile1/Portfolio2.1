import { FaArrowRightLong, FaRegCopyright } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { GiStarSkull } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      className="overflow-hidden"
      
    >
      <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.4 }}
        className="min-h-screen  overflow-hidden
     bg-black text-white px-6 py-16 flex items-center justify-center lg:flex-row flex-col"
      >
        <motion.div initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }} className="w-full relative">
          {/* Heading */}
          <motion.h2 initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }} className="lg:text-7xl text-4xl font-bold mb-3">
            Excited to learn and collaborate let’s get in touch!
          </motion.h2>

          {/* Text + Arrow Row */}
          <motion.div initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }} className="flex items-center gap-4">
            <p className="text-2xl font-medium text-white border-b-2">
              My Socials
            </p>
            <FaArrowRightLong className="lg:text-6xl  text-4xl w-[8vw] rounded-2xl px-5 py-1 border-2 border-dashed text-[#39ff14]" />
          </motion.div>

          {/* Social Media Icons */}
          <motion.div initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }} className="flex flex-wrap items-center gap-6 mt-6">
            {[
              {
                href: "https://github.com/codevile1",
                icon: <FaGithub size={30} />,
                label: "Github",
              },
              {
                href: "https://linkedin.com/in/satyam-chaurasiya-396b2b323/",
                icon: <FaLinkedinIn size={30} />,
                label: "Linkedin",
              },
              {
                href: "https://instagram.com/igx_vile/",
                icon: <FaInstagram size={30} />,
                label: "Instagram",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden text-white flex items-center justify-center border-2 border-dashed px-8 py-3 gap-2 rounded-2xl transition-all"
              >
                {/* BG Hover Overlay */}
                <span className="absolute bottom-0 left-0 w-full h-0 bg-amber-100 group-hover:h-full transition-all duration-500 ease-in-out z-0" />
                {/* Content */}
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-all duration-300">
                  {item.icon}
                  {item.label}
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }} className="max-w-2xl w-full">
          <form
            action="https://formsubmit.co/satyamchaurasiyaaa@gmail.com"
            method="POST"
            className="space-y-6"
          >
            {/* Protect from spam */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 bg-[#111111] rounded-xl border-b-2 border-dashed border-[#39ff14] focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2  bg-[#111111] rounded-xl border-b-2 border-dashed border-[#39ff14] focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full px-4 py-2  bg-[#111111] rounded-2xl border-b-2 border-dashed border-[#39ff14] focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="transition-all px-6 py-2  font-semibold bg-transparent border-2 rounded-2xl border-[#39ff14] border-dashed hover:scale-105 
             bg-clip-text text-transparent 
             bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 cursor-pointer hover:border-amber-50 hover:bg-red-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
        <GiStarSkull className="absolute opacity-15 z-10 pointer-events-none text-amber-100 h-full w-full" />
      </motion.section>
      <footer className=" text-amber-100 w-full h-12 flex items-center justify-between hover:text-amber-300  text-xs  ">
        <div className="flex items-center justify-center gap-2 lg:ml-6 ml-2 ">
          {" "}
          <FaRegCopyright />
          <h1>code by satyam</h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <h1>Made with</h1>
          <CiHeart />
        </div>
        <h1 className="lg:mr-6 mr-2">Version 2.1</h1>
      </footer>
    </div>
  );
};

export default Contact;
