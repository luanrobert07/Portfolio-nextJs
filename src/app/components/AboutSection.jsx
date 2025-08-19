"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
     <ul className="list-disc pl-2">
  <li><strong>Frontend Development</strong>
    <ul>
      <li>React - React Native - NextJs - HTML e CSS - JavaScript</li>
      <li>Figma para UI/UX</li>
    </ul>
  </li>

  <li><strong>Backend Development</strong>
    <ul>
      <li>Node.js - Express - NestJS - Fastify - Java - TypeScript - Python - C, C++ e C#</li>
    </ul>
  </li>

  <li><strong>Databases</strong>
    <ul>
      <li>PostgreSQL - MongoDB - MySQL</li>
      <li>Prisma</li>
    </ul>
  </li>

  <li><strong>DevOps & Tools</strong>
    <ul>
      <li>Docker and CI/CD</li>
      <li>Tests</li>
      <li>Design Patterns</li>
    </ul>
  </li>

  <li><strong>Data Science & AI</strong>
    <ul>
      <li>Data Science - Machine Learning - Deep Learning</li>
      <li>TensorFlow</li>
    </ul>
  </li>
</ul>

    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Engenharia de Software - Inatel</li>
        <li>Intercâmbio Acadêmico - Jade University of Applied Sciences</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>React - Rocktseat</li>
        <li>FullStack - Rocktseat</li>
        <li>NextJS - Rocktseat</li>
        <li>NodeJS - Rocktseat</li>
        <li>Desenvolvimento Web - Udemy</li>
      </ul>
    ),
  },
  {
    title: "XP",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend developer</li>
        <li>Backend developer</li>
        <li>Designer</li>
        <li>Project Manager</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/image_about.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Sou Desenvolvedor Web Full Stack com paixão por criar aplicações web responsivas e interativas. Tenho experiência tanto no desenvolvimento frontend quanto backend, utilizando tecnologias como React, Node.js, TypeScript e Python. Sou um aprendiz rápido, sempre buscando expandir meu conhecimento e me manter atualizado com as tendências do setor.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              XP{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
