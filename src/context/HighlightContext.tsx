import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

type HighlightContextType = {
  hoveredSkill: string | null;
  setHoveredSkill: (skill: string | null) => void;
  hoveredProject: string | null;
  setHoveredProject: (project: string | null) => void;
};

const HighlightContext = createContext<HighlightContextType>({
  hoveredSkill: null,
  setHoveredSkill: () => {},
  hoveredProject: null,
  setHoveredProject: () => {}
});

export const HighlightProvider = ({ children }: { children: ReactNode }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <HighlightContext.Provider value={{ hoveredSkill, setHoveredSkill, hoveredProject, setHoveredProject }}>
      {children}
    </HighlightContext.Provider>
  );
};

export const useHighlight = () => useContext(HighlightContext);

