
import React from 'react';
import { Section } from '../types';
import { AlphabetIcon, VocabularyIcon, GrammarIcon, BasicsIcon } from './icons';

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const NavItem: React.FC<{
  section: Section;
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  icon: React.ReactNode;
}> = ({ section, activeSection, setActiveSection, icon }) => {
  const isActive = activeSection === section;
  return (
    <button
      onClick={() => setActiveSection(section)}
      className={`flex items-center w-full text-left p-3 rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-cyan-500 text-white shadow-lg'
          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
      }`}
    >
      {icon}
      <span className="ml-3 font-medium">{section}</span>
    </button>
  );
};

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md space-y-2">
      <NavItem
        section={Section.Alphabet}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        icon={<AlphabetIcon className="w-5 h-5" />}
      />
      <NavItem
        section={Section.Vocabulary}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        icon={<VocabularyIcon className="w-5 h-5" />}
      />
       <NavItem
        section={Section.Basics}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        icon={<BasicsIcon className="w-5 h-5" />}
      />
      <NavItem
        section={Section.Grammar}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        icon={<GrammarIcon className="w-5 h-5" />}
      />
    </nav>
  );
};

export default Navbar;
