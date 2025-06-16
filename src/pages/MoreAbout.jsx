import { BsGlobe } from "react-icons/bs";
import { SiSymphony } from "react-icons/si";
import RevealWrapper from "./RevealWrapper";

const MoreAbout = () => {
  return (
    <div className="text-amber-100 overflow-x-hidden relative">
      <SiSymphony className="text-amber-100 w-full absolute z-20 top-0 left-0 h-screen opacity-10 pointer-events-none" />

      <div className="lg:w-7xl lg:p-8 lg:m-20 m-8">
        <RevealWrapper delay={0.1}>
          <h1 className="lg:text-7xl text-3xl border-b-2 lg:pb-20 pb-8">
            <span className="lg:text-8xl text-3xl">B</span>uilding smooth digital experiences with fresh ideas and clean Code.
          </h1>
        </RevealWrapper>

        <div className="w-20 lg:w-40 lg:h-40 text-3xl lg:text-8xl h-20 bg-blue-700 rounded-full absolute z-10 right-15 lg:right-96 lg:top-72 top-42 ease-in-out flex items-center justify-center spin-30s">
          <BsGlobe className="text-3xl lg:text-8xl" />
        </div>
      </div>

      <div className="w-full lg:p-8 lg:m-20 m-8 flex lg:flex-row flex-col">
        <RevealWrapper delay={0.2} className="lg:w-xl lg:h-28 w-80 lg:text-3xl text-xl mb-7">
          <h1>
            I craft clean and responsive web experiences, always aiming to blend functionality with visual clarity.
          </h1>
        </RevealWrapper>

        <div className="w-fit h-[60vw] object-center">
          <img
            className="lg:w-full lg:h-full h-[100vw] w-full object-center ml-2"
            src="./aboutpic.JPG"
            alt="error"
          />
        </div>
      </div>

      <div className="lg:w-7xl lg:p-8 lg:m-20 m-8">
        <RevealWrapper delay={0.3}>
          <h1 className="text-2xl lg:text-4xl lg:w-4xl lg:mt-0 mt-38">
            I can help you with clean, responsive web design and modern frontend development.
          </h1>
        </RevealWrapper>

        <div className="w-full flex items-center justify-between lg:gap-6 lg:mt-0 mt-14 gap-40 my-20 flex-wrap">
          <RevealWrapper delay={0.4} className="w-sm h-[20vw] flex items-start justify-center lg:mt-0 mt-12 gap-3 p-5 flex-col">
            <p className="border-b-1 text-3xl mb-1 pb-2 w-full">01</p>
            <h1 className="lg:text-3xl text-xl">Design</h1>
            <h3 className="lg:text-xl text-md text-slate-300">
              Creating intuitive and impactful web designs that prioritize user experience and aesthetics — now available exclusively with development (since 2024).
            </h3>
          </RevealWrapper>

          <RevealWrapper delay={0.5} className="w-sm h-[20vw] flex items-start justify-center gap-3 p-5 flex-col lg:mt-0 mt-8">
            <p className="border-b-1 pb-2 text-3xl mb-1 w-full">02</p>
            <h1 className="lg:text-3xl text-xl">Development</h1>
            <h3 className="lg:text-xl text-md text-slate-300">
              I craft scalable, interactive websites that bring design to life — with motion, smooth transitions, and clean code. Currently using React, GSAP, and Webflow.
            </h3>
          </RevealWrapper>

          <RevealWrapper delay={0.6} className="w-sm h-[20vw] flex items-start justify-center gap-3 p-5 flex-col lg:mt-0 mt-16">
            <p className="border-b-1 pb-2 text-3xl mb-1 w-full">03</p>
            <h1 className="lg:text-3xl text-xl">The Full Package</h1>
            <h3 className="lg:text-xl text-md text-slate-300 lg:mb-0 mb-16">
              A complete solution — from idea to launch. My combined expertise in design and development lets me build fully polished, impactful websites that make a lasting impression.
            </h3>
          </RevealWrapper>
        </div>
        

        <div className="w-full text-center">
          <a
            href="/#hero"
            className="border-2 w-full lg:px-8 px-4 py-1 text-md lg:text-xl lg:py-3 rounded-xl hover:bg-white transition-all duration-500 cursor-pointer hover:text-black"
          >
            Back to home
          </a>

          <RevealWrapper delay={0.7}>
            <p className="relative mt-7 block text-xl font-bold group cursor-pointer">
              <span className="after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#79519E] after:transition-all after:duration-500 group-hover:after:w-full">
                Coded with ❤️
              </span>
            </p>
          </RevealWrapper>
        </div>
      </div>
    </div>
  );
};

export default MoreAbout;
