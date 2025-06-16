import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useRef } from "react";
import Hero from "./Hero";


const Preloader = () => {
  const [showContent, setShowContent] = useState(false);
  const container = useRef(null); // important for scoping GSAP

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 20,
      delay: 0.3,
      duration: 2.5,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          const svg = document.querySelector(".svg");
          if (svg) svg.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, { scope: container });

  return (
    <div ref={container}>
      <div className="svg fixed top-0 left-0 z-10 w-full h-screen overflow-hidden bg-black flex items-center justify-center">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="150"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  {"< / >"}
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.jpg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        
       <Hero/>
      )}
    </div>
  );
};

export default Preloader;
