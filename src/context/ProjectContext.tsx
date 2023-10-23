"use client";

import { useState, createContext } from "react";

export const ProjectContext = createContext<any>({ selectedProject: null });

export const ProjectCtxProvider = ({ children }: { children: JSX.Element }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <ProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
