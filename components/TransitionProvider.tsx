import React, { createContext, useContext, useState } from 'react';

type Direction = { x: string | number; y: string | number };

interface TransitionContextType {
  targetPage: string;
  direction: Direction;
  setTransition: (page: string, dir: Direction) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const [targetPage, setTargetPage] = useState('');
  const [direction, setDirection] = useState<Direction>({ x: 0, y: 0 });

  const setTransition = (page: string, dir: Direction) => {
    setTargetPage(page);
    setDirection(dir);
  };

  return (
    <TransitionContext.Provider value={{ targetPage, direction, setTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) throw new Error("useTransition must be used inside TransitionProvider");
  return context;
};
