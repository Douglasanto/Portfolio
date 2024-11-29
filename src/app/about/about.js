import React from "react";
import Image from "next/image";

import imgAbout from "../../../public/dodo.jpg";

const About = () => {
  return (
    <>
      <section
        id="about-section"
        className="bg-[rgb(8,8,7)] bg-opacity-100 section-padding"
      >
        <div className="relative text-white">
          <h2 className="relative section-heading mb-5 md:-mb-10 z-30 text-xl">
            Sobre mim {" />"}
          </h2>
          <div className="overflow-hidden z-0 max-w-sm 2xl:max-w-xl 3xl:max-w-xl relative mx-auto pointer-events-none">
            <Image
              src={imgAbout}
              loading="lazy"
              width={1536}
              height={2040}
              decoding="async"
              className="mx-auto rounded 2xl:rounded-2xl aspect-square sm:aspect-auto object-cover"
              style={{}}
              alt="about-me"
            />
            <div className="h-full w-full top-0 bg-gradient-to-t from-secondary-400 opacity-80 opaci xl:opacity-75 to-transparent absolute rounded 2xl:rounded-2xl"></div>
          </div>
        </div>
        <p className="indent-4 sm:indent-12 lg:text-md text-xs text-dark-gray mt-8 font-medium items-end flex justify-end w-full relative sm:-mt-12">
          <span className="max-w-[54ch]">
            Olá👋, Eu sou Douglas, um profissional de TI com especialização em
            desenvolvimento front-end e atualmente curso B.I em Ciência,
            Tecnologia e Inovação. Tenho experiência na criação de interfaces de
            usuário e soluções de pagamento, com habilidades em TypeScript,
            JavaScript, HTML5, CSS3 e frameworks como React e Next.js. Já
            trabalhei em plataformas como Nexo, PP e Gama Revista, além de
            desenvolver sites em React para diversos projetos. No back-end,
            tenho experiência com Laravel, onde contribui para as plataformas
            Box Petiko e Shop Petiko, criando e aprimorando funcionalidades.
            Também atuei na integração de pagamentos via PIX e cartão,
            utilizando gateways como Pagarme, MaxiPago e Rede, e automoção de
            envio de e-mails para clientes. Além disso, sou familiarizado com
            Amazon S3 e Lambda e com WordPress para melhorias no front-end.
          </span>
        </p>
      </section>
    </>
  );
};

export default About;
