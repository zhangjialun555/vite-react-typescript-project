import React, { createContext, useContext, useState, ReactNode } from 'react';

type NavbarPosition = 'top' | 'left';

interface LayoutContextType {
  navbarPosition: NavbarPosition;
  setNavbarPosition: (position: NavbarPosition) => void;
  toggleNavbarPosition: () => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [navbarPosition, setNavbarPosition] = useState<NavbarPosition>('top');

  const toggleNavbarPosition = () => {
    setNavbarPosition(prev => prev === 'top' ? 'left' : 'top');
  };

  const value: LayoutContextType = {
    navbarPosition,
    setNavbarPosition,
    toggleNavbarPosition,
  };

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};

