import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Calculator } from './components/Calculator';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1C1917]">
      <Header />
      <main>
        <Hero />
        <Features />
        <Process />
        <Calculator />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;