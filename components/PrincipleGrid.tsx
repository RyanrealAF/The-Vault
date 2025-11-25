import React, { useState } from 'react';
import { DESIGN_PRINCIPLES } from '../constants';
import { PrincipleCard } from './PrincipleCard';
import { DesignPrinciple } from '../types';
import { X } from 'lucide-react';

export const PrincipleGrid: React.FC = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState<DesignPrinciple | null>(null);

  return (
    <>
      <section className="my-16">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-main mb-4">
                <span className="text-accent-bronze block md:inline mr-0 md:mr-3">CORE</span>
                <span className="block md:inline">PRINCIPLES</span>
            </h2>
            <div className="h-0.5 w-16 bg-accent-bronze mx-auto mb-6 shadow-[0_0_10px_rgba(255,209,102,0.5)]"></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-muted font-light leading-relaxed">
              The foundational tenets guiding every aspect of the Dark Elegance aesthetic.
              These principles inform material selection, spatial design, and sensory experience.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESIGN_PRINCIPLES.map((principle) => (
            <PrincipleCard
              key={principle.id}
              principle={principle}
              onClick={setSelectedPrinciple}
            />
          ))}
        </div>
      </section>

      {selectedPrinciple && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
                onClick={() => setSelectedPrinciple(null)}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-dark-card border border-accent-bronze/30 w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fadeIn">
                <button
                    onClick={() => setSelectedPrinciple(null)}
                    className="absolute top-4 right-4 z-10 text-text-muted hover:text-accent-bronze transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="md:w-1/2 h-64 md:h-auto relative">
                    <img
                        src={selectedPrinciple.imageUrl}
                        alt={selectedPrinciple.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent md:bg-gradient-to-r"></div>
                </div>

                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-accent-bronze text-sm uppercase tracking-widest mb-2 opacity-80">
                        {selectedPrinciple.category}
                    </span>
                    <h2 className="text-4xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                        {selectedPrinciple.title}
                    </h2>
                    <p className="text-lg text-text-muted font-light leading-relaxed">
                        {selectedPrinciple.description}
                    </p>
                    <div className="mt-8">
                         <button
                            className="text-sm border border-accent-bronze text-accent-bronze px-6 py-2 hover:bg-accent-bronze hover:text-dark-bg transition-all uppercase tracking-wider"
                            onClick={() => setSelectedPrinciple(null)}
                        >
                            Close Spec
                         </button>
                    </div>
                </div>
            </div>
        </div>
      )}
    </>
  );
};