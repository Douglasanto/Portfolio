"use client";

import React, { useState, useEffect, useRef } from "react";
import navLinksData from "../../data/navLinks.json";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    navLinksData.forEach((navLink) => {
      sectionRefs.current[navLink.url] = document.getElementById(navLink.url);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const [isHovered, setIsHovered] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? "light" : "dark";
  };

  return (
    <>
      <header className="absolute w-full tracking-body z-40 top-0">
        <nav className="px-4 sm:px-7 2xl:px-10 pb-2 xl:pb-4 2xl:pb-6 mt-6 xl:mt-8 2xl:mt-10 sm:flex items-start justify-between">
          <div className="flex justify-around items-start text-start gap-4 sm:flex-col">
            <div className="flex items-center">
              <span
                className="text-gray-800 hover-trigger cursor-pointer text-lg font-bold"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                DES
              </span>
              <span
                className={`full-text text-lg font-bold text-gray-800 inline-block overflow-hidden border-r-2 border-gray-800
                ${isHovered ? "animate-typing" : ""}`}
                style={{ maxWidth: isHovered ? "100%" : "0" }}
              >
                ENVOLVEDOR
              </span>
            </div>
          </div>
          <div className="flex items-center text-center gap-x-20">
            {/* svg animado */}
            <div className="flex items-center justify-center">
              <div
                className={`w-24 h-12 flex items-center rounded-full p-1 cursor-pointer transition ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-300"
                }`}
                onClick={toggleTheme}
              >
                <div
                  className={`w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center transform transition ${
                    isDarkMode ? "translate-x-12" : "translate-x-0"
                  }`}
                >
                  {isDarkMode ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-yellow-400"
                    >
                      <path
                        d="M21 13.9066C19.805 14.6253 18.4055 15.0386 16.9095 15.0386C12.5198 15.0386 8.9612 11.4801 8.9612 7.09034C8.9612 5.59439 9.37447 4.19496 10.0931 3C6.03221 3.91866 3 7.5491 3 11.8878C3 16.9203 7.07968 21 12.1122 21C16.451 21 20.0815 17.9676 21 13.9066Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        d="M12 23V22M4.22183 19.7782L4.92893 19.0711M1 12H2M4.22183 4.22183L4.92893 4.92893M12 2V1M19.0711 4.92893L19.7782 4.22183M22 12H23M19.0711 19.0711L19.7782 19.7782M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            {/* navLinks */}
            <div className="hidden sm:flex items-start gap-x-4">
              {navLinksData.map((navLink) => (
                <ScrollLink
                  to={navLink.url}
                  smooth="easeOutQuad"
                  duration={800}
                  key={navLink.id}
                  className="relative flex hover:text-dark-gray text-base list-none font-semibold cursor-pointer ease-expo transition-all duration-500 group"
                >
                  <span className="z-10">{navLink.title}</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-600 ease-custom-ease pointer-events-none"
                  >
                    {navLink.title}
                  </span>
                </ScrollLink>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <button
        aria-label="Menu Navigation Button"
        aria-expanded={menuVisible}
        aria-controls="menu"
        className={`z-[999] flex h-16 w-16 2xl:w-20 2xl:h-20 flex-col items-center justify-center rounded-full bg-[#7f7f7f] ease-expo hover:scale-90 fixed left-6 top-6 sm:left-8 sm:top-8 transition-all duration-1000 group ${
          scrolled ? "scale-100" : "scale-0"
        }`}
        onClick={toggleMenu}
      >
        <span
          className={`absolute h-[2px] w-7 2xl:w-9 rounded-full bg-black transition-all duration-300 ease-in-out-circ ${
            menuVisible ? "translate-y-0 rotate-45" : "-translate-y-1 -rotate-0"
          }`}
        ></span>
        <span
          className={`absolute h-[2px] w-7 2xl:w-9 rounded-full bg-black transition-all duration-300 ease-in-out-circ ${
            menuVisible ? "translate-y-0 -rotate-45" : "translate-y-1 rotate-0"
          }`}
        ></span>
      </button>
      {menuVisible && (
        <>
          <div
            className="z-40 h-screen w-screen fixed top-0 left-0 bg-dark-gray cursor-pointer opacity-[0.4]"
            onClick={toggleMenu}
          ></div>
          <div className="fixed z-50 flex h-svh w-screen pointer-events-none ease-expo">
            <div className="relative z-20 m-2 flex max-w-lg 2xl:max-w-xl 3xl:max-w-3xl flex-col justify-between rounded-md py-10 overflow-hidden bg-dark-gray pointer-events-auto w-[inherit] opacity-1 ">
              <nav className="flex flex-col justify-center px-8 sm:px-14 h-full text-xl 2xl:px-20 font-bold text-white relative leading-[140%]">
                {navLinksData.map((nav) => (
                  <div
                    key={nav.id}
                    className="group flex w-fit cursor-pointer items-center gap-x-4"
                  >
                    <span className="invisible inline-block h-3 w-3 rounded-full bg-white opacity-0 scale-0 transition-all group-hover:visible group-hover:opacity-100 group-hover:scale-100 ease-expo duration-800"></span>
                    <div className="w-fit overflow-y-clip">
                      <div className="transform-none">
                        <ScrollLink
                          to={nav.url}
                          smooth="easeOutQuad"
                          duration={800}
                          key={nav.id}
                          onClick={toggleMenu}
                          className="group-hover:translate-x-6 inline-block duration-700 ease-expo transition-transform"
                        >
                          {nav.title}
                        </ScrollLink>
                      </div>
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
