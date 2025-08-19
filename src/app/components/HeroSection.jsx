"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-900 to-secondary-200">
              Hello, eu sou Luan Robert
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Desenvolvedor",
                1000,
                "Web Full Stack",
                1000,
                "Mobile",
                1000,
                "Data Science",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Sou graduando em Engenharia de Software no Inatel no 9° período, no qual venho desenvolvendo sólidos conhecimentos em desenvolvimento de software, metodologias ágeis, análise de dados e inteligência artificial. Durante a graduação, participei ativamente da empresa júnior, colaborando em projetos reais que me permitiram aplicar teoria na prática e aprimorar habilidades técnicas e interpessoais.
          Ao iniciar minha trajetória profissional, atuei em projetos nas áreas de desenvolvimento front-end e back-end, com foco em tecnologias como JavaScript, ReactJS, NodeJs, Python e metodologias ágeis. Além disso, adquiri experiência em telecomunicações, colaborando com equipes de campo e trabalhando com configuração de redes 2G, 3G, 4G e 5G. Essas vivências ampliaram meu repertório técnico e me prepararam para os desafios do mercado de tecnologia.
          Recentemente, realizei um intercâmbio na Alemanha, onde tive a oportunidade de aprender alemão,aprimorar meu inglês, vivenciar novas culturas e expandir minha visão global. Essa experiência intercultural fortaleceu minha capacidade de colaboração e adaptabilidade, habilidades essenciais para um profissional na área de tecnologia hoje.
          Busco atuar nas áreas de desenvolvimento de software, com foco em projetos que integrem tecnologia e experiência do usuário, alinhando meu crescimento profissional com aprendizado contínuo e colaboração.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-900 to-secondary-200 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1Zy9KSoQzVAqnVS1s21q3X28q73gbY6Bw/view?usp=drive_link"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-900 to-secondary-200 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden shadow-xl shadow-black/50">
            <Image
              src="/images/perfil.jpeg"
              alt="hero image"
              className="absolute w-full h-full object-cover"
              width={400}
              height={400}
            />
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
