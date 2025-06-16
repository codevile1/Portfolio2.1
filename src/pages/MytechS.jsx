import { useRef, useState } from "react";
import { motion } from "framer-motion";

const techs = [
  { name: "JavaScript", color: "bg-yellow-400" },
  { name: "React", color: "bg-blue-400" },
  { name: "Tailwind", color: "bg-cyan-400" },
  { name: "GSAP", color: "bg-purple-800" },
  { name: "HTML", color: "bg-orange-400" },
  { name: "CSS", color: "bg-purple-400" },
  { name: "Git", color: "bg-red-500" },
  { name: "VS Code", color: "bg-indigo-500" },
  { name: "ChatGPT", color: "bg-emerald-500" },
  { name: "Motion", color: "bg-red-400" },
];

export default function TechStack() {
  const containerRef = useRef(null);
  const [bgStyle, setBgStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    bg: "",
  });

  const handleHover = (e, color) => {
    const box = e.currentTarget.getBoundingClientRect();
    const containerBox = containerRef.current.getBoundingClientRect();

    setBgStyle({
      left: box.left - containerBox.left,
      top: box.top - containerBox.top,
      width: box.width,
      height: box.height,
      bg: color,
    });
  };

  const handleLeave = () => {
    setBgStyle({ ...bgStyle, width: 0, height: 0 }); // hide background
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.4 }}
      className="w-full py-16 bg-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20,scale:0.8 }}
        whileInView={{ opacity: 1, y: 0,scale:1 }}
        transition={{ duration: 0.8, delay: 0.5,ease: "easeOut" }}
        ref={containerRef}
        className="relative max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 px-4"
      >
        {/* Moving Background */}
        <span
          className={`absolute rounded-xl z-0 transition-all duration-500 ease-in-out ${bgStyle.bg}`}
          style={{
            left: bgStyle.left,
            top: bgStyle.top,
            width: bgStyle.width,
            height: bgStyle.height,
          }}
        />

        {techs.map((tech, idx) => (
          <div
            key={idx}
            onMouseEnter={(e) => handleHover(e, tech.color)}
            onMouseLeave={handleLeave}
            className="relative lg:p-6 p-4 border overflow-hidden border-neutral-700 cursor-pointer rounded-xl text-center z-10"
          >
            <span className="relative z-10 font-semibold text-xl">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
