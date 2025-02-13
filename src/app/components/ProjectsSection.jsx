"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    "id": 1,
    "title": "Bullvest",
    "description": "This is a mobile application with React Native and Node.js about investment.",
    "image": "/images/projects/bullvest.png",
    "tag": ["All", "Mobile"],
    "gitUrl": "/",
    "previewUrl": "/"
},
{
    "id": 2,
    "title": "To-do list",
    "description": "A simple and efficient to-do list application built with React Native and Node.js to help users organize their daily tasks.",
    "image": "/images/projects/to_do_list.png",
    "tag": ["All", "Mobile"],
    "gitUrl": "/",
    "previewUrl": "/"
},
{
    "id": 3,
    "title": "GymPass App",
    "description": "A web platform developed with React and Node.js to manage gym memberships, bookings, and workouts.",
    "image": "/images/projects/gym.png",
    "tag": ["All", "Web"],
    "gitUrl": "/",
    "previewUrl": "/"
},
{
    "id": 4,
    "title": "Mountain Events",
    "description": "A web application for discovering and managing outdoor events, built with React and Node.js.",
    "image": "/images/projects/montain_events.png",
    "tag": ["All", "Web"],
    "gitUrl": "/",
    "previewUrl": "/"
},
{
    "id": 5,
    "title": "Gym plus plus",
    "description": "A mobile fitness application developed with React Native and Node.js to help users track workouts, progress, and nutrition.",
    "image": "/images/projects/gym_plus_plus.png",
    "tag": ["All", "Mobile"],
    "gitUrl": "/",
    "previewUrl": "/"
},
{
    "id": 6,
    "title": "Maternar App",
    "description": "A mobile application designed to provide guidance and support for mothers during pregnancy and early childhood, built with React Native and Node.js.",
    "image": "/images/projects/maternar.png",
    "tag": ["All", "Mobile"],
    "gitUrl": "/",
    "previewUrl": "/"
}

  

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
