
import React from 'react';
import { ALPHABET_DATA } from '../constants';
import Card from './Card';

const AlphabetSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">The Tifinagh Alphabet</h2>
      <p className="mb-6 text-slate-600 dark:text-slate-400">Tifinagh is the script used to write Amazigh languages. Click on a letter to see its details.</p>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {ALPHABET_DATA.map((letter) => (
          <div 
            key={letter.tifinagh} 
            className="group perspective-1000"
          >
            <div className="relative w-full h-28 transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
              {/* Front of the card */}
              <div className="absolute w-full h-full backface-hidden bg-white dark:bg-slate-800 rounded-lg shadow-md flex items-center justify-center cursor-pointer border border-slate-200 dark:border-slate-700">
                <span className="text-5xl font-bold text-cyan-500">{letter.tifinagh}</span>
              </div>
              {/* Back of the card */}
              <div className="absolute w-full h-full backface-hidden bg-cyan-500 dark:bg-cyan-600 rounded-lg shadow-lg flex flex-col items-center justify-center rotate-y-180 text-white">
                <p className="text-2xl font-bold">{letter.latin}</p>
                <p className="text-sm">{letter.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlphabetSection;
