"use client";

import React from "react";

import Link from "next/link";
import navLinksData from "../../data/navLinks.json";
import socialsLinks from "../../data/socialsLinks.json";
import Seta from "../../../public/acima.png";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const Contact = () => {
  return (
    <>
      <footer
        id="contact-section"
        className="px-6 sm:px-[4%] 3xl:px-[10%] pb-8 3xl:pb-16 pt-8 sm:pt-[5%] relative"
      >
        <div className="grid grid-cols-2 gap-y-7 gap-x-7 lg:gap-y-10 md:grid-cols-9 md:gap-x-10">
          <div className="md:col-span-6 lg:col-span-6 flex flex-col">
            <span className="flex border-b-[1.5px] border-dark-gray pb-1 font-bold uppercase mb-3">
              Menu
            </span>
            <div className="flex flex-col gap-y-2 md:gap-y-1">
              {navLinksData.map((navLink) => (
                <ScrollLink
                  to={navLink.url}
                  smooth="easeOutQuad"
                  duration={800}
                  key={navLink.id}
                  className="w-16 group-hover:translate-x-6 inline-block duration-700 ease-expo transition-transform cursor-pointer"
                >
                  {navLink.title}
                </ScrollLink>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 lg:col-span-3 flex flex-col">
            <span className="flex border-b-[1.5px] border-dark-gray pb-1 font-bold uppercase mb-3">
              Socials
            </span>
            <div className="flex flex-col gap-y-2 md:gap-y-1">
              {socialsLinks.map((navLink) => (
                <Link
                  href={navLink.url}
                  key={navLink.id}
                  className="leading-base font-medium block relative overflow-hidden group h-fit w-fit"
                >
                  {navLink.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-x-10 mt-14 items-end">
          <span className="md:col-span-6 col-span-8 lg:col-span-6 font-bold leading-[85%] uppercase text-md sm:text-lg lg:text-xl tracking-heading">
            {/* order-last sm:order-first  */}
            © 2025
            <b r className="block" />
            Douglas Santo
          </span>
          <Link
            href="/"
            className="col-span-2 flex items-center space-x-2 w-fit group text-dark-gray"
          >
            <span className="hidden md:block font-extrabold uppercase hover:text-black duration-200">
              VOLTAR AO TOPO
            </span>

            <span className="flex md:hidden w-16 h-16 rounded-full bg-[#7f7f7f] items-center justify-center">
              <Image src={Seta} alt="Seta" />
            </span>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Contact;
