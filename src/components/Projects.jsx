import React, { useEffect } from "react";
import CardProject from "./CardProject";
import ProjectsData from "../data/projects"; // 👈 import your local array

const Projects = () => {
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(ProjectsData));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {ProjectsData.map((project) => (
        <CardProject key={project.id} {...project} />
      ))}
    </div>
  );
};

export default Projects;