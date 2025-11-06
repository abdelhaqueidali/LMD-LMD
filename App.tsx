
import React, { useState } from 'react';
import { Section } from './types';
import Navbar from './components/Navbar';
import AlphabetSection from './components/AlphabetSection';
import VocabularySection from './components/VocabularySection';
import GrammarSection from './components/GrammarSection';
import BasicsSection from './components/BasicsSection';
import { YazIcon } from './components/icons';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.Alphabet);

  const renderSection = () => {
    switch (activeSection) {
      case Section.Alphabet:
        return <AlphabetSection />;
      case Section.Vocabulary:
        return <VocabularySection />;
      case Section.Grammar:
        return <GrammarSection />;
      case Section.Basics:
        return <BasicsSection />;
      default:
        return <AlphabetSection />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 transition-colors duration-300">
      <header className="bg-white dark:bg-slate-800/50 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <YazIcon className="h-8 w-8 text-cyan-500" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Amazigh Learn</h1>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-1/4 xl:w-1/5">
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        </aside>
        
        <main className="w-full lg:w-3/4 xl:w-4/5">
          {renderSection()}
        </main>
      </div>
      
      <footer className="bg-white dark:bg-slate-800/50 mt-8 py-4">
          <div className="container mx-auto px-4 text-center text-slate-500 dark:text-slate-400 text-sm">
              <p>ⴰⵙⵍⵎⴷ ⵏ ⵜⵓⵜⵍⴰⵢⵜ ⵜⴰⵎⴰⵣⵉⵖⵜ - Learning the Amazigh Language</p>
          </div>
      </footer>
    </div>
  );
};

export default App;
