
import React from 'react';
import { BASICS_DATA } from '../constants';
import Card from './Card';

const BasicsSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Basic Phrases</h2>
      <p className="mb-6 text-slate-600 dark:text-slate-400">Learn essential phrases for everyday conversations.</p>

      <div className="space-y-4">
        {BASICS_DATA.map((phrase, index) => (
          <Card key={index} className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <p className="text-lg font-semibold text-cyan-500">{phrase.amazigh}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">({phrase.pronunciation})</p>
            </div>
            <p className="mt-2 md:mt-0 text-slate-700 dark:text-slate-300 font-medium">{phrase.english}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BasicsSection;
