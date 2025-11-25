import React from 'react';
import { DesignPrinciple } from '../types';

interface PrincipleCardProps {
  principle: DesignPrinciple;
  onClick: (principle: DesignPrinciple) => void;
}

export const PrincipleCard: React.FC<PrincipleCardProps> = ({ principle, onClick }) => {
  return (
    <div
      className="group bg-dark-card border border-white/5 rounded-sm p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 hover:border-accent-bronze/20 cursor-pointer"
      onClick={() => onClick(principle)}
    >
      <div className="relative overflow-hidden rounded-sm mb-5">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
        <div
            className="w-full h-56 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
            style={{ backgroundImage: `url('${principle.imageUrl}')` }}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-accent-bronze mb-3 tracking-wide group-hover:text-white transition-colors duration-300">
          {principle.title}
        </h2>
        <p className="text-sm text-text-muted leading-relaxed font-light mb-4">
          {principle.description}
        </p>
      </div>

      <div className="text-right mt-4 pt-4 border-t border-white/5">
        <span className="text-xs uppercase tracking-widest text-text-muted/60 group-hover:text-accent-bronze transition-colors duration-300">
          {principle.category}
        </span>
      </div>
    </div>
  );
};