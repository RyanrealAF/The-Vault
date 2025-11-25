
import React from 'react';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { DocumentGrid } from './components/DocumentGrid';
import { BrandingGrid } from './components/BrandingGrid';
import { DoctrineChat } from './components/DoctrineChat';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <DocumentGrid />
        <BrandingGrid />
      </main>
      <DoctrineChat />
      <Footer />
    </Layout>
  );
};

export default App;
