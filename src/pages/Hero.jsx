import LandingPage_Back from "../ui/LandingPage_Back";
import { FaScissors } from "react-icons/fa6";
import { motion } from "framer-motion";
import mybgimg from "/mybg.png";
import { RiDownloadLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div id="hero" className="relative    ">
<a
  href="/SatyamChaurasiya.pdf"
  download
  className="hidden lg:flex absolute z-10 right-[1%] bottom-[4%] w-4 h-14 rounded-full items-center justify-center backdrop-blur-md bg-black/10 border-[1px] text-xs text-white"
>
  <RiDownloadLine />
</a>

      <div className="main w-full border-b-2 border-amber-100 border-dashed relative">
        <div className="landing  w-full h-screen bg-black text-white">
          <div className="imagediv relative  w-full h-screen  overflow-hidden">
            <LandingPage_Back />
            <img
              className="w-1/2 h-1/2 transition-opacity duration-1000 opacity-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-1/4 scale-[3] object-contain pointer-events-none z-10"
              src={mybgimg}
              alt=""
              loading="eager"
            />
          </div>
          <div className=" absolute     z-[15] w-full  bottom-[0%] left-0  text-center flex-col flex items-center justify-center gap-1 leading-none   lg:text-4xl ">
            <FaScissors className="absolute  text-amber-100 lg:-bottom-4.5 -bottom-2.5   right-20 " />
            <h1>Crafted with code & creativity</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
