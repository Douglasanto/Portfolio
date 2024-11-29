"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import About from "./about/about";
import Stacks from "./stacks/stacks";
import Works from "./works/works";
import heroBg from "../../public/dodo.jpg";
import Services from "./services/services";
import Forms from "./forms/forms";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home-section");
      const secondDiv = heroSection.querySelector("#home-section > div > div");

      const bounding = heroSection.getBoundingClientRect();
      const opacity = 1 - (bounding.top / -window.innerHeight) * 2;
      const translateY = Math.min(
        Math.max(100 * (bounding.top / window.innerHeight), -100),
        0
      );

      const clampedOpacity = Math.min(Math.max(opacity, 0), 1);

      secondDiv.style.opacity = clampedOpacity;
      secondDiv.style.transform = `translateY(${translateY}%)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };
  const handleClose = () => {
    setShowForm(false);
  };
  return (
    <>
      <main>
        <section id="home-section" className="mb-[-100svh] py-0">
          <div className="h-svh flex items-center justify-center section-padding sticky top-0 lg:justify-around sm:items-center">
            <div className="z-10 flex justify-between text-center items-center">
              <div className="flex flex-col gap-y-3 sm:mb-0 sm:gap-y-8 items-center">
                <div className="leading-[92.5%] uppercase text-lg xs:text-text-lg lg:text-xl sm:text-display-0 font-bold w-full flex flex-col relative duration-500">
                  <h2 className="text-md lg:text-lg pb-2 md:text-center tracking-wider">
                    Olá👋 Meu nome é Douglas
                  </h2>
                  <h1 className="sm:text-right md:text-center tracking-wider">
                    Desenvolvedor Front-end
                  </h1>
                  <h1 className="sm:text-right md:text-center tracking-wider">
                    & Back-End
                  </h1>
                </div>
              </div>
              <Image
                src={heroBg}
                loading="lazy"
                width={1186}
                height={1186}
                decoding="async"
                className="hidden lg:flex w-5/6 lg:w-2/6 pointer-events-none hero-bg"
                style={{
                  opacity: "0.7",
                  zIndex: "-20",
                }}
                alt="Lorem"
              />
            </div>
          </div>
          <div className="h-svh"></div>
        </section>
        <div className="relative rounded-t-3xl overflow-hidden w-full min-h-screen z-20">
          <About />
          <Stacks />
          <Works />
        </div>
        <div className="h-svh"></div>
        <div className="mt-[-100svh]">
          <Services />
          {/* COLOCAR NO JSON ESSE CODIGO CASO PRECISE  */}
          {/* {
    //     "id": "reviews",
    //     "title": "Reviews",
    //     "url": "reviews-section"
    // }, */}
          {/* <section
            id="reviews-section"
            className="-bottom-80 px-6 sm:px-[4%] pt-14 sm:pt-16 min-h-[70vh] 3xl:px-[10%]"
          >
            <div className="flex flex-col gap-y-2 xl:gap-y-3 2xl:gap-y-4">
              <h2 className="section-heading pb-3 text-xl">
                See what people say about me.
              </h2>
              <div>
                <div className="flex flex-col gap-y-10 sticky">
                  <div className="flex flex-col gap-y-6 2xl:gap-y-10 bg-[#E1E1DB] p-6 lg:p-10 rounded-lg -dark-gray border-opacity-5 sticky top-24 sm:top[-20%] overflow-hidden">
                    <blockquote className="flex-grow text-pretty leading-[125%] text-md md:text-lg 3xl:text-lg max-w-[40ch] font-medium pl-1">
                      "Huy's design and development for MLV, a World Economic
                      Forum initiative, surpassed standards, embodying speed,
                      skill, and commitment. His intuitive grasp turns vision
                      into reality.""
                    </blockquote>
                    <div className="flex flex-1 items-center gap-x-4 w-fit text-base">
                      <div className="gap-y-0 flex text-base 2xl:text-md flex-col">
                        <span className="tracking-base">Lorem Ipsum</span>
                        <span className="leading-base flex font-medium text-[#9e978f]">
                          Lorem Ipsum
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-6 2xl:gap-y-10 bg-[#E1E1DB] p-6 lg:p-10 rounded-lg border-dark-gray border-opacity-5 sticky top-24 sm:top[-20%] overflow-hidden">
                    <blockquote className="flex-grow text-pretty leading-[125%] text-md md:text-lg 3xl:text-lg max-w-[40ch] font-medium pl-1">
                      "Huy's design and development for MLV, a World Economic
                      Forum initiative, surpassed standards, embodying speed,
                      skill, and commitment. His intuitive grasp turns vision
                      into reality.""
                    </blockquote>
                    <div className="flex flex-1 items-center gap-x-4 w-fit text-base">
                      <div className="gap-y-0 flex text-base 2xl:text-md flex-col">
                        <span className="tracking-base">Lorem Ipsum</span>
                        <span className="leading-base flex font-medium text-[#9e978f]">
                          Lorem Ipsum
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </div>
        <div className="px-6 sm:px-[4%] 3xl:px-[10%] w-full flex flex-col mt-32">
          <span className="mx-auto text-dark-gray font-bold mb-5 lg:text-base 2xl:text-text-md">
            Você tem um projeto? Você está desenvolvendo um?
          </span>
          <button
            aria-label="Get in touch"
            className="relative underline-transition text-center text-xl mb-8"
            onClick={handleClick}
          >
            ENTRE EM CONTATO
          </button>

          {showForm && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div
                className="fixed inset-0 bg-transparent opacity-80 backdrop-blur-sm"
                onClick={handleClose}
              ></div>

              <div className="relative bg-transparent p-4 lg:p-16 rounded-lg shadow-lg z-50">
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-8 lg:top-4 lg:right-4 text-[22px] font-['none'] z-10 text-black lg:text-white"
                >
                  X
                </button>

                <Forms />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Hero;
