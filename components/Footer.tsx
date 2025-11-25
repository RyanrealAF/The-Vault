import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-center py-12 border-t border-white/5 mt-auto">
      <div className="text-sm text-text-muted opacity-60">
        <p className="mb-2 tracking-wider uppercase text-xs">&copy; 2023 Doctrine of Dark Elegance. All rights reserved.</p>
        <p className="italic font-light">Rendered with Tactical Minimalism.</p>
      </div>
    </footer>
  );
};