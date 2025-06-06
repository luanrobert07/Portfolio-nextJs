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
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Luan Robert",
                1000,
                "Developer",
                1000,
                "Web Full Stack",
                1000,
                "Mobile",
                1000,
                "UI/UX Designer",
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
          I&apos;m a technology enthusiast with a solid background in software development 
          and a solution-focused approach. Throughout my journey, I&apos;ve continuously 
          sought to expand my technical and leadership skills by tackling challenging 
          projects, engaging in ongoing studies, and collaborating on various teams and 
          projects. I&apos;m committed to improvement, always seeking new opportunities 
          to learn and grow. I&apos;m open to connections and partnerships that can add 
          value and drive mutual success.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-900 to-secondary-200 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1tSfFPonSpoEqoMtGSY8kEx93nxoDJSLa/view?usp=drive_link"
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
