
import React from 'react';
import { GRAMMAR_DATA } from '../constants';
import Card from './Card';

const GrammarSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Grammar Essentials</h2>
      <p className="mb-6 text-slate-600 dark:text-slate-400">Understand the basic rules of Amazigh grammar.</p>

      <div className="space-y-6">
        {GRAMMAR_DATA.map((rule, index) => (
          <Card key={index}>
            <h3 className="text-xl font-bold text-cyan-500 mb-3">{rule.title}</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">{rule.explanation}</p>
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
              <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">Examples:</h4>
              <ul className="space-y-2">
                {rule.examples.map((example, i) => (
                  <li key={i} className="flex flex-col sm:flex-row justify-between p-2 rounded-md bg-slate-100 dark:bg-slate-700/50">
                    <span className="font-mono text-cyan-600 dark:text-cyan-400">{example.amazigh}</span>
                    <span className="text-slate-500 dark:text-slate-400 sm:text-right">{example.english}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GrammarSection;
