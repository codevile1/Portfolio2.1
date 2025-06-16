import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RevealWrapper = ({ children, delay = 0, className = "" }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current) {
      gsap.fromTo(
        wrapperRef.current.children,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay,
          stagger: {
            each: 0.2,
            from: "start",
            ease: "power2.out",
          },
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [delay]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

export default RevealWrapper;
