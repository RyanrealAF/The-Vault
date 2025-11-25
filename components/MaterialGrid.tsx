import React, { useState } from 'react';
import { MATERIALS } from '../constants';
import { MaterialCard } from './MaterialCard';
import { Material } from '../types';
import { X } from 'lucide-react';

export const MaterialGrid: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MATERIALS.map((material) => (
          <MaterialCard 
            key={material.id} 
            material={material} 
            onClick={setSelectedMaterial}
          />
        ))}
      </section>

      {selectedMaterial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
                onClick={() => setSelectedMaterial(null)}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-dark-card border border-accent-bronze/30 w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fadeIn">
                <button 
                    onClick={() => setSelectedMaterial(null)}
                    className="absolute top-4 right-4 z-10 text-text-muted hover:text-accent-bronze transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="md:w-1/2 h-64 md:h-auto relative">
                    <img 
                        src={selectedMaterial.imageUrl} 
                        alt={selectedMaterial.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent md:bg-gradient-to-r"></div>
                </div>

                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-accent-bronze text-sm uppercase tracking-widest mb-2 opacity-80">
                        {selectedMaterial.category}
                    </span>
                    <h2 className="text-4xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                        {selectedMaterial.title}
                    </h2>
                    <p className="text-lg text-text-muted font-light leading-relaxed">
                        {selectedMaterial.description}
                    </p>
                    <div className="mt-8">
                         <button 
                            className="text-sm border border-accent-bronze text-accent-bronze px-6 py-2 hover:bg-accent-bronze hover:text-dark-bg transition-all uppercase tracking-wider"
                            onClick={() => setSelectedMaterial(null)}
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