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
          <div className="flex items-start text-start gap-x-20">
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
