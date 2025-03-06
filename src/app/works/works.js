import React from "react";

import Link from "next/link";
import Image from "next/image";

const Works = () => {
  return (
    <>
      <section
        id="works-section"
        className=" bg-[rgb(8,8,7)] bg-opacity-100 section-padding text-white"
      >
        <h2 className="relative text-xl section-heading pb-8">
          Trabalhos {" />"}
        </h2>
        {/* <div className="view mouse"></div> */}
        <div className="grid grid-cols-1 gap-x-14 xl:gap-x-18 2xl:gap-x-20 3xl:gap-x-24 gap-y-10 md:gap-y-20 pb-20 lg:grid-cols-12">
          {/* <div className="work-1 @container">
            <div>
              <div className="flex flex-col @lg:flex-row justify-between mt-3 gap-y-4">
                <h3 className=" text-md w-fit 2xl:text-h3 3xl:text-lg font-bold">
                  Clowbozy
                </h3>
                <div className="text-sm 2xl:text-base flex font-medium tracking-base text-dark-gray items-center uppercase">
                  <span className="gap-2 flex h-fit items-center justify-center flex-wrap">
                    <span className="px-3 border-gray rounded-full">
                      Development
                    </span>
                    <span className="px-3 border-gray rounded-full">
                      Design
                    </span>
                    <span className="px-3 border-gray rounded-full">
                      Freelancer
                    </span>
                  </span>
                </div>
                <div className="text-sm 2xl:text-base flex font-medium tracking-base items-center mt-6">
                  <span>
                    Recentemente, tive o prazer de criar o site para a ClowBozy,
                    uma agência de marketing digital focada em esportes. Com
                    mais de 150 clientes, destacam-se na gestão de redes
                    sociais, tráfego e criação de conteúdo. O site reflete sua
                    personalidade vibrante, com emojis e slogans cativantes. Foi
                    uma colaboração inspiradora e estou ansioso para mais
                    projetos como esse, ajudando marcas a se destacarem online.
                    Se busca uma parceria dinâmica e criativa, ClowBozy é a
                    escolha certa.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="work-0 @container">
            <Link className="group" href="#" target="_blank">
              <div className="overflow-hidden group-hover:rounded-xl transition-all duration-300 rounded mb-4 xl:mb-5 2xl:mb-6 3xl:mb-7 ">
                <Image
                  src="/clowbozy.jpg"
                  loading="lazy"
                  width={1000}
                  height={1000}
                  decoding="async"
                  className="w-full group-hover:scale-105 ease-expo transition-all duration-[1200ms]"
                  style={{ color: "transparent" }}
                  alt="Lorem"
                />
              </div>
            </Link>
          </div>
          <div className="work-2 @container">
            <div className="group">
              <div className="flex flex-col @lg:flex-row justify-between mt-3 gap-y-4">
                <h3 className="text-md w-fit 2xl:text-h3 3xl:text-lg font-bold">
                  Bahia Sat
                </h3>
                <div className="text-sm 2xl:text-base flex font-medium tracking-base text-dark-gray items-center uppercase">
                  <span className="gap-2 flex h-fit items-center justify-center flex-wrap">
                    <span className="px-3 border-gray rounded-full">
                      Development
                    </span>
                    <span className="px-3 border-gray rounded-full">
                      Design
                    </span>
                    <span className="px-3 border-gray rounded-full">
                      Freelancer
                    </span>
                  </span>
                </div>
                <div className="text-sm 2xl:text-base flex font-medium tracking-base items-center mt-6">
                  <span>
                    Recentemente, criei o site para uma empresa de rastreamento
                    de veículos com mais de 10.000 veículos rastreados desde
                    2012. Com monitoramento 24 horas, o site destaca a segurança
                    e eficiência da empresa, convidando os visitantes a explorar
                    suas soluções de maneira inteligente e segura. Foi uma
                    experiência gratificante contribuir para a presença online
                    de uma empresa tão crucial para a tranquilidade dos
                    proprietários de veículos. Se busca um sistema confiável de
                    rastreamento, encontrou.
                  </span>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="work-3 @container">
            <Link
              className="group"
              href="https://mbtransportesdeveiculos.com.br/"
              target="_blank"
            >
              <div className="overflow-hidden group-hover:rounded-xl transition-all duration-300 rounded mb-4 xl:mb-5 2xl:mb-6 3xl:mb-7 ">
                <Image
                  src="/bahiasat.jpg"
                  loading="lazy"
                  width={1000}
                  height={1000}
                  decoding="async"
                  className="w-full group-hover:scale-105 ease-expo transition-all duration-[1200ms]"
                  style={{ color: "transparent" }}
                  alt="Lorem"
                />
              </div>
            </Link>
          </div> */}
          <div className=" work-1 @container">
            <div className="group">
              <div className="flex flex-col @lg:flex-row justify-between mt-3 gap-y-4">
                <h3 className="text-md w-fit 2xl:text-h3 3xl:text-lg font-bold">
                  Maria Bonita Transportadora
                </h3>
                <div className="text-sm 2xl:text-base flex font-medium tracking-base text-dark-gray items-center uppercase">
                  <span className="gap-2 flex h-fit items-center justify-center flex-wrap">
                    <span className="px-3 border-gray rounded-full">
                      Development
                    </span>
                    <span className="px-3 border-gray rounded-full">
                      Design
                    </span>
                    <span className="px-3 border-gray rounded-full">
                      Freelancer
                    </span>
                  </span>
                </div>
                <div className="text-sm 2xl:text-base flex font-medium tracking-base items-center mt-6">
                  <span>
                    Recentemente, contribuí com a atualização visual do site da
                    MB Transportadora. Embora não tenha sido o criador original,
                    fui responsável por aprimorar o aspecto visual do site. O
                    lema &quot;Transportando segurança e qualidade por todo
                    Brasil&quot; reflete nossa dedicação em fornecer serviços
                    confiáveis e de qualidade em todo o país. Foi gratificante
                    colaborar na melhoria da presença online da MB
                    Transportadora, proporcionando uma experiência mais atrativa
                    e informativa para os visitantes.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="work-0 @container">
            <Link
              className="group"
              href="https://mbtransportesdeveiculos.com.br/"
              target="_blank"
            >
              <div className="overflow-hidden group-hover:rounded-xl transition-all duration-300 rounded mb-4 xl:mb-5 2xl:mb-6 3xl:mb-7 ">
                <Image
                  src="/MB.png"
                  loading="lazy"
                  width={1000}
                  height={1000}
                  decoding="async"
                  className="w-full group-hover:scale-105 ease-expo transition-all duration-[1200ms]"
                  style={{ color: "transparent" }}
                  alt="Lorem"
                />
              </div>
            </Link>
          </div>
          {/* <div className="work-2 @container">
            <div className="group">
              <div className="flex flex-col @lg:flex-row justify-between mt-3 gap-y-4">
                <h3 className="text-md w-fit 2xl:text-h3 3xl:text-lg font-bold">
                  Cedraz Mobiliarias
                </h3>
                <div className="text-sm 2xl:text-base flex font-medium tracking-base text-dark-gray items-center uppercase">
                  <span className="gap-2 flex h-fit items-center justify-center flex-wrap">
                    <span className="px-3 border-gray rounded-full">
                      Development
                    </span>
                    <span className="px-3 border-gray rounded-full">
                      Design
                    </span>
                    <span className="px-3 border-gray rounded-full">
                      Freelancer
                    </span>
                  </span>
                </div>
              </div>
              <div className="text-sm 2xl:text-base flex font-medium tracking-base items-center mt-6">
                <span>
                  Recentemente, desenvolvi o site de uma imobiliária, cuidando
                  de todo o processo de criação, desde o design até a
                  implementação. Inspirado no compromisso da empresa com seus
                  clientes, busquei refletir valores como confiança e excelência
                  em cada detalhe do projeto. Com um layout moderno e funcional,
                  o site foi pensado para facilitar a navegação, destacando os
                  imóveis disponíveis e proporcionando uma experiência intuitiva
                  e informativa para os visitantes. Foi uma satisfação
                  contribuir para fortalecer a presença online da imobiliária,
                  ajudando-a a se conectar de forma mais eficaz com seu público.
                </span>
              </div>
            </div>
          </div>
          <div className="work-3 @container">
            <Link className="group" href="#" target="_blank">
              <div className="overflow-hidden group-hover:rounded-xl transition-all duration-300 rounded mb-4 xl:mb-5 2xl:mb-6 3xl:mb-7 ">
                <Image
                  src="/Cedraz.png"
                  loading="lazy"
                  width={1000}
                  height={1000}
                  decoding="async"
                  className="w-full group-hover:scale-105 ease-expo transition-all duration-[1200ms]"
                  style={{ color: "transparent" }}
                  alt="Lorem"
                />
              </div>
            </Link>
          </div> */}
          <div className=" work-1 @container">
            <div className="group">
              <div className="flex flex-col @lg:flex-row justify-between mt-3 gap-y-4">
                <h3 className=" text-md w-fit 2xl:text-h3 3xl:text-lg font-bold">
                  Nexo Jornal
                </h3>
                <div className="text-sm 2xl:text-base flex font-medium tracking-base text-dark-gray items-center uppercase">
                  <span className="gap-x-2 flex h-fit items-center justify-center">
                    <span className="px-3 border-gray rounded-full">
                      Desenvolvedor
                    </span>
                    <span className="px-3 border-gray rounded-full">
                      Estagiario
                    </span>
                  </span>
                </div>
                <div className="text-sm 2xl:text-base flex font-medium tracking-base items-center mt-6">
                  <span>
                    Por dois anos, integrei a equipe da Nexo Jornal, onde
                    trabalhei em projetos que abrangiam o Nexo Jornal
                    (Principal), Nexo Políticas Públicas e a revista Gama. No
                    Nexo Jornal, aprimorei habilidades em React e TypeScript,
                    enquanto na Gama Revista, desenvolvi competências em
                    WordPress. Além disso, participei de projetos especiais em
                    HTML e CSS puro. Essa experiência foi enriquecedora,
                    permitindo-me colaborar em projetos significativos e
                    expandir meu conhecimento em jornalismo e tecnologia. Estou
                    ansioso para aplicar essas habilidades em novos desafios.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="work-0 @container">
            <Link className="group" href="#" target="_blank">
              <div className="overflow-hidden group-hover:rounded-xl transition-all duration-300 rounded mb-4 xl:mb-5 2xl:mb-6 3xl:mb-7 ">
                <Image
                  src="/nexo.png"
                  loading="lazy"
                  width={1000}
                  height={1000}
                  decoding="async"
                  className="w-full group-hover:scale-105 ease-expo transition-all duration-[1200ms]"
                  style={{ color: "transparent" }}
                  alt="Lorem"
                />
              </div>
            </Link>
          </div>
          <div className="work-2 @container">
            <div className="group">
              <div className="flex flex-col @lg:flex-row justify-between mt-3 gap-y-4">
                <h3 className="text-md w-fit 2xl:text-h3 3xl:text-lg font-bold">
                  Petiko
                </h3>
                <div className="text-sm 2xl:text-base flex font-medium tracking-base text-dark-gray items-center uppercase">
                  <span className="gap-x-2 flex h-fit items-center justify-center">
                    <span className="px-3 border-gray rounded-full">
                      Desenvolvedor
                    </span>
                    <span className="px-3 border-gray rounded-full">
                      Estagiario
                    </span>
                  </span>
                </div>
                <div className="text-sm 2xl:text-base flex font-medium tracking-base items-center mt-6">
                  <span>
                    Atuei no desenvolvimento de soluções para a área de
                    pagamentos, com foco na criação de fluxos de transações via
                    Pix e cartão de crédito. Durante esse período, participei da
                    implementação de integrações com plataformas renomadas, como
                    Pagar.me, MaxiPago e Rede, que gerenciam reembolsos e
                    cobranças. Além disso, desenvolvi interfaces de pagamento
                    intuitivas, proporcionando uma experiência fluida para os
                    usuários, e implementei sistemas automáticos de envio de
                    e-mails para aprimorar a comunicação com os clientes. Essa
                    experiência foi transformadora, permitindo-me adquirir
                    habilidades técnicas e estratégicas no setor financeiro e
                    fortalecer minha capacidade de criar soluções que impactam
                    positivamente a experiência dos usuários.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="work-3 @container">
            <Link className="group" href="#" target="_blank">
              <div className="overflow-hidden group-hover:rounded-xl transition-all duration-300 rounded mb-4 xl:mb-5 2xl:mb-6 3xl:mb-7 ">
                <Image
                  src="/petiko.png"
                  loading="lazy"
                  width={1000}
                  height={1000}
                  decoding="async"
                  className="w-full group-hover:scale-105 ease-expo transition-all duration-[1200ms]"
                  style={{ color: "transparent" }}
                  alt="Lorem"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
