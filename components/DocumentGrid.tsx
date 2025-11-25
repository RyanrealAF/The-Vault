import React, { useState } from 'react';
import { DOCUMENTS } from '../constants';
import { DocumentCard } from './DocumentCard';
import { Document } from '../types';
import { X } from 'lucide-react';

export const DocumentGrid: React.FC = () => {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);

  return (
    <>
      <section className="my-16">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-main mb-4">
                <span className="text-accent-bronze block md:inline mr-0 md:mr-3">CORE</span>
                <span className="block md:inline">DOCTRINES</span>
            </h2>
            <div className="h-0.5 w-16 bg-accent-bronze mx-auto mb-6 shadow-[0_0_10px_rgba(255,209,102,0.5)]"></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-muted font-light leading-relaxed">
              Foundational texts outlining the principles and tactics of advanced psychological and information warfare.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCUMENTS.map((document) => (
            <DocumentCard
              key={document.id}
              document={document}
              onClick={setSelectedDocument}
            />
          ))}
        </div>
      </section>

      {selectedDocument && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
                onClick={() => setSelectedDocument(null)}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-dark-card border border-accent-bronze/30 w-full max-w-5xl h-[90vh] rounded-lg shadow-2xl overflow-hidden flex flex-col animate-fadeIn">
                <button
                    onClick={() => setSelectedDocument(null)}
                    className="absolute top-4 right-4 z-10 text-text-muted hover:text-accent-bronze transition-colors"
                    aria-label="Close document viewer"
                >
                    <X size={24} />
                </button>

                <div className="p-8 pb-4 border-b border-white/10 flex flex-col items-start">
                    <span className="text-accent-bronze text-sm uppercase tracking-widest mb-2 opacity-80">
                        {selectedDocument.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                        {selectedDocument.title}
                    </h2>
                    <p className="text-md text-text-muted font-light leading-relaxed">
                        {selectedDocument.summary}
                    </p>
                </div>

                <div className="flex-grow overflow-y-auto p-8 text-text-main custom-scrollbar whitespace-pre-wrap leading-relaxed text-base">
                    {selectedDocument.content}
                </div>

                <div className="p-4 border-t border-white/5 flex justify-end">
                     <button
                        className="text-sm border border-accent-bronze text-accent-bronze px-6 py-2 hover:bg-accent-bronze hover:text-dark-bg transition-all uppercase tracking-wider"
                        onClick={() => setSelectedDocument(null)}
                    >
                        Close Document
                     </button>
                </div>
            </div>
        </div>
      )}
    </>
  );
};