import React from "react";
import Image from "next/image";

import imgAbout from "../../../public/about.png";

const Services = () => {
  return (
    <>
      <section
        id="services-section"
        className="-bottom-80 px-6 sm:px-[4%] pt-14 sm:pt-16 min-h-[70vh] 3xl:px-[10%] bg-[rgb(8,8,7)] bg-opacity-100 rounded-b-3xl"
      >
        <div className="flex w-full flex-col gap-y-space-lg md:gap-y-space-2xl gap-y-28 text-white">
          <div className="flex justify-between">
            <h2 className="relative text-xl section-heading">
              Como posso te ajudar?
            </h2>
            <h2 className="text-xl section-heading col-span-6 max-w-[19ch] text-accent-400 hidden lg:flex">
              {" />"}
            </h2>
          </div>
          <div className="flex flex-col lg:justify-center lg:flex-row gap-20 lg:w-2/4 ml-auto">
            <span className="text-base opacity-70">(SERVICES)</span>
            <p className="opacity-70 text-xs">
              Está insatisfeito com sites que não refletem sua marca ou não
              impulsionam o crescimento? Eu crio experiências digitais de alto
              nível que encantam e ajudam você a se concentrar no crescimento do
              seu negócio.
            </p>
          </div>
        </div>
        <div className="w-full pt-space-lg sticky text-white opacity-70">
          <div className="mt-12 gap-y-16 flex flex-col justify-between">
            <div
              className="sticky top-0 border-t border-t-secondary-300 bg-[rgb(8,8,7)] bg-opacity-100 "
              style={{ top: "calc(20vh + 0em)", marginBottom: "17.25em" }}
            >
              <div className="flex gap-6 grid-cols-10 items-center justify-start gap-x-space-xs text-left text-heading-2 m-4 font-semibold text-accent-400 md:grid md:justify-between md:gap-x-fluid md:m-8">
                <span className="text-md col-span-2 lg:text-xl">(01)</span>
                <h3 className="col-span-6 text-md col-start-6 py-space-md 2xl:py-space-sm lg:text-xl">
                  Desenvolvimento web
                </h3>
              </div>
              <div className="relative flex min-h-[30vh] flex-col place-items-start md:grid md:min-h-[40vh] md:grid-cols-12 lg:grid-cols-10">
                <div className="col-span-7 gap-10 col-start-6 flex w-full flex-col md:m-2 md:mt-5 max-w-[70ch]">
                  <p className="max-w-[60ch] text-balance text-sm md:text-base font-medium">
                    Um site desenvolvido para cativar e converter pode levar sua
                    marca a novos patamares. Meus sites personalizados são
                    cuidadosamente criados para refletir sua identidade única,
                    proporcionando experiências fluídas com foco em
                    animações—mantendo seu público envolvido e retornando.
                  </p>
                  <div className="flex flex-col max-w-[40ch] lg:max-w-[50ch] divide-y divide-secondary-200">
                    <span className="text-md flex items-start font-bold md:text-lg">
                      <span className="text-md font-mono font-medium leading-[200%] md:text-base-large pr-8">
                        (01)
                      </span>
                      CMS Integration
                    </span>
                    <span className="text-md flex items-start font-bold md:text-lg">
                      <span className="text-md font-mono font-medium leading-[200%] md:text-base-large pr-8">
                        (02)
                      </span>
                      Motion &amp; Animations
                    </span>
                    <span className="text-md flex items-start font-bold md:text-lg">
                      <span className="text-md font-mono font-medium leading-[200%] md:text-base-large pr-8">
                        (03)
                      </span>
                      3D Development
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="sticky top-0 border-t border-t-secondary-300 bg-[rgb(8,8,7)] bg-opacity-100 w-full"
              style={{ top: "calc(20vh + 5.75em)", marginBottom: "11.5em" }}
            >
              <div className="flex gap-6 grid-cols-10 items-center justify-start gap-x-space-xs text-left text-heading-2 m-4 font-semibold text-accent-400 md:grid md:justify-between md:gap-x-fluid md:m-8">
                <span className="text-md col-span-2 lg:text-xl">(02)</span>
                <h3 className="col-span-6 text-md col-start-6 py-space-md 2xl:py-space-sm lg:text-xl">
                  Desenvolvedor de sites
                </h3>
              </div>
              <div className="relative flex min-h-[30vh] flex-col place-items-start md:grid md:min-h-[40vh] md:grid-cols-10">
                <div className="col-span-7 gap-10 col-start-6 flex w-full flex-col md:m-2 md:mt-5 max-w-[70ch]">
                  <p className="max-w-[60ch] text-balance text-sm md:text-base font-medium">
                    Fortaleça sua presença online com um site que realmente
                    conecta com os sentimentos e desejos do seu público. Eu crio
                    sites impressionantes e de alta conversão que se alinham aos
                    objetivos do seu negócio, ajudando você a se destacar e
                    crescer de forma eficaz.
                  </p>
                  <div className="flex flex-col max-w-[40ch] lg:max-w-[50ch] divide-y divide-secondary-200">
                    <span className="text-md flex items-start font-bold md:text-lg">
                      <span className="text-md font-mono font-medium leading-[200%] md:text-base-large pr-8">
                        (01)
                      </span>
                      Responsive Design
                    </span>
                    <span className="text-md flex items-start font-bold md:text-lg">
                      <span className="text-md font-mono font-medium leading-[200%] md:text-base-large pr-8">
                        (02)
                      </span>
                      Wireframing
                    </span>
                    <span className="text-md flex items-start font-bold md:text-lg">
                      <span className="text-md font-mono font-medium leading-[200%] md:text-base-large pr-8">
                        (03)
                      </span>
                      UX Writing
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="sticky top-0 border-t border-t-secondary-300 bg-[rgb(8,8,7)] bg-opacity-100"
              style={{ top: "calc(20vh + 11.5em)", marginBottom: "5.75em" }}
            >
              <div className="flex gap-6 grid-cols-10 items-center justify-start gap-x-space-xs text-left text-heading-2 m-4 font-semibold text-accent-400 md:grid md:justify-between md:gap-x-fluid md:m-8">
                <span className="text-md col-span-2 lg:text-xl">(03)</span>
                <h3 className="col-span-6 text-md col-start-6 py-space-md 2xl:py-space-sm lg:text-xl">
                  Otimização de Busca
                </h3>
              </div>
              <div className="relative flex min-h-[30vh] flex-col place-items-start md:grid md:min-h-[40vh] md:grid-cols-10">
                <div className="col-span-7 gap-10 col-start-6 flex w-full flex-col md:m-2 md:mt-5 max-w-[70ch]">
                  <p className="max-w-[60ch] text-balance text-sm md:text-base font-medium">
                    Seu site merece ser visto. Eu otimizo sua presença online
                    para aumentar a visibilidade nos resultados de busca,
                    ajudando seu negócio a atrair o público certo e se destacar
                    no cenário digital.
                  </p>
                  <div className="flex flex-col max-w-[40ch] lg:max-w-[50ch] divide-y divide-secondary-200">
                    <span className="text-md flex items-start font-bold md:text-lg">
                      <span className="text-md font-mono font-medium leading-[200%] md:text-base-large pr-8">
                        (01)
                      </span>
                      Technical SEO
                    </span>
                    <span className="text-md flex items-start font-bold md:text-lg">
                      <span className="text-md font-mono font-medium leading-[200%] md:text-base-large pr-8">
                        (02)
                      </span>
                      On-Page Optimization
                    </span>
                    <span className="text-md flex items-start font-bold md:text-lg">
                      <span className="text-md font-mono font-medium leading-[200%] md:text-base-large pr-8">
                        (03)
                      </span>
                      SEO Audits &amp; Analysis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
