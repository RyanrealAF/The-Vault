import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-text-main font-sans selection:bg-accent-bronze selection:text-dark-bg">
      {children}
    </div>
  );
};