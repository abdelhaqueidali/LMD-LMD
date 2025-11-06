
import React, { useState } from 'react';
import { VOCABULARY_DATA } from '../constants';

const VocabularySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(VOCABULARY_DATA[0].category);
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

  const currentWords = VOCABULARY_DATA.find(cat => cat.category === activeCategory)?.words || [];

  const handleFlip = (index: number) => {
    setFlippedCardIndex(flippedCardIndex === index ? null : index);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Vocabulary</h2>
      <p className="mb-6 text-slate-600 dark:text-slate-400">Learn new words with flashcards. Click a card to flip it over.</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {VOCABULARY_DATA.map(cat => (
          <button
            key={cat.category}
            onClick={() => {
              setActiveCategory(cat.category);
              setFlippedCardIndex(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat.category
                ? 'bg-cyan-500 text-white shadow'
                : 'bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentWords.map((word, index) => (
          <div key={index} className="perspective-1000" onClick={() => handleFlip(index)}>
            <div
              className={`relative w-full h-40 transform-style-3d transition-transform duration-500 cursor-pointer ${
                flippedCardIndex === index ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-white dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center justify-center p-4 border border-slate-200 dark:border-slate-700">
                <p className="text-3xl font-semibold text-cyan-500">{word.amazigh}</p>
                {word.pronunciation && (
                   <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">({word.pronunciation})</p>
                )}
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden bg-cyan-500 dark:bg-cyan-600 rounded-xl shadow-lg flex items-center justify-center p-4 rotate-y-180">
                <p className="text-3xl font-semibold text-white">{word.english}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabularySection;
