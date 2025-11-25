
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="pt-16 pb-12 text-center px-4">
      <div className="animate-fade-in-down">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-main mb-6">
          <span className="text-accent-bronze block md:inline mr-0 md:mr-3">DARK ELEGANCE</span>
          <span className="block md:inline">DOCTRINE</span>
        </h1>
        <div className="h-0.5 w-16 bg-accent-bronze mx-auto mb-8 shadow-[0_0_10px_rgba(255,209,102,0.5)]"></div>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-text-muted font-light leading-relaxed">
          Aesthetics of control. Architecture of the mind. Unyielding resilience.
          <br/>
          <span className="text-sm opacity-70 mt-2 block">Tactical Minimalism & Psychological Armor</span>
        </p>
      </div>
    </header>
  );
};
