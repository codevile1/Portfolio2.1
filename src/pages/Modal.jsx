import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

const Modal = ({ modal, projects }) => {
  const { active, index } = modal;
  const container=useRef(null);
  const cursor=useRef(null);

  useEffect(()=>{
    const movecontainerX=gsap.quickTo(container.current,"left",{duration:0.9,ease:"power3"});
    const movecontainerY=gsap.quickTo(container.current,"top",{duration:0.9,ease:"power3"});
    const movecursorX=gsap.quickTo(cursor.current,"left",{duration:0.4,ease:"power3"});
    const movecursorY=gsap.quickTo(cursor.current,"top",{duration:0.4,ease:"power3"});


    window.addEventListener("mousemove",(e)=>{
        const {clientX,clientY}=e;
        movecontainerX(clientX);
        movecontainerY(clientY)
        movecursorX(clientX);
        movecursorY(clientY)
    })


  },[])



  return (
    <>
    <motion.div ref={container}
      variants={scaleAnimation}
      initial={"initial"}
      animate={active ? "open" : "closed"}
      className="lg:h-[16vw] rounded-xl h-[31vw] w-[50vw] lg:w-[400px] flex items-center pointer-events-none justify-center absolute  left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2  overflow-hidden  z-50"
    >
      <div
        style={{ top: index * -100 + "%" }}
        className="w-full h-full  absolute transition-[top_0.5s_cubic-bezier(0.76,0,0.24,1)] z-50 "
      >
        {projects.map((project, index) => {
          return (
            <div
              className="relative flex items-center justify-center h-full lg:p-0 p-2"
              key={`modal_${index}`}
              style={{ backgroundColor: project.color }}
            >
              {project.src && (
                <img
                  className="h-auto rounded-xl "
                  src={`/${project.src}`}
                  width={300}
                  alt="Image"
                />
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
    <motion.div
  ref={cursor}
  variants={scaleAnimation}
  initial={"initial"}
  style={{position:"absolute",left:"50%"}}
  animate={active ? "open" : "closed"}
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-700 lg:h-14 h-8 w-8 lg:w-14 lg:text-[1vw] text-[3vw] pointer-events-none z-[999] rounded-full flex items-center justify-center text-amber-50"
>
  View
</motion.div>

    </>
  );
};

export default Modal;
