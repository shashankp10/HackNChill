import "./Hero.css";
import React, { useState } from "react";

function Hero() {
  const [navStatus, setNavStatus] = useState(false);
  const toggleNav = () => {
    setNavStatus(!navStatus);
    if (!navStatus && window.innerWidth <= 850) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <div id="home" className="bg-wpr overflow-x-hidden relative">
      <div className="h-full max-w-screen-2xl px-[5vw] mx-auto">
        <div className="flex gap-5 justify-end py-8 text-white  max-h-[100px] text-3xl">
          <div
            className={`max-md:fixed max-md:w-[60vw] max-md:text-lg flex-1 z-10 max-md:h-full max-md:bg-red-950 max-md:flex-col items-center max-md:justify-center max-md:shadow flex gap-5 justify-between duration-100 max-md:top-0 ${
              navStatus ? "right-0" : "-right-[60vw]"
            }`}
          >
            <a onClick={toggleNav} href="#home">
              Home
            </a>
            <a onClick={toggleNav} href="">
              Theme
            </a>
            <a onClick={toggleNav} href="">
              Event
            </a>
            <a onClick={toggleNav} href="">
              Sponser
            </a>
            <a onClick={toggleNav} href="">
              FAQs
            </a>
          </div>
          <div>
            <a
              onClick={toggleNav}
              className="hidden max-md:flex  items-center z-10  relative"
            >
              <div className="w-12  flex flex-col justify-center gap-2 items-end">
                <div
                  className={`h-1 rounded-md w-full  duration-100 bg-white ${
                    navStatus ? "rotate-45 translate-y-3" : ""
                  }`}
                ></div>
                <div
                  className={`h-1 w-[75%] rounded-md  duration-100 bg-white ${
                    navStatus ? "bg-transparent" : ""
                  }`}
                ></div>
                <div
                  className={`h-1 rounded-md w-[50%] bg-white  duration-100 ${
                    navStatus
                      ? "-rotate-45 w-[100%] -translate-y-3 duration-100"
                      : ""
                  }`}
                ></div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col -mt-[100px] h-full">
          <h1 className="text-white text-center text-2xl font-semibold mb-16">
            A GDSC ADGIPS EXCLUSIVE
          </h1>
          <div>
            <img src="./src/assets/Logo.png" alt="logo" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 border-t-4 border-b-4 border-black bg-white">
        <p className="bg-white text-red-700 whitespace-nowrap text-lg animate1">
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
          <span className="mx-2"> &#8226; Registor Now</span>
        </p>
      </div>
    </div>
  );
}

export default Hero;
