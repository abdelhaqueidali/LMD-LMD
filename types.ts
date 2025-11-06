
export enum Section {
  Alphabet = 'Alphabet',
  Vocabulary = 'Vocabulary',
  Grammar = 'Grammar',
  Basics = 'Basics',
}

export interface Letter {
  tifinagh: string;
  latin: string;
  name: string;
}

export interface VocabularyWord {
  amazigh: string;
  english: string;
  pronunciation?: string;
}

export interface VocabularyCategory {
  category: string;
  words: VocabularyWord[];
}

export interface GrammarRule {
  title: string;
  explanation: string;
  examples: {
    amazigh: string;
    english: string;
  }[];
}

export interface BasicPhrase {
    amazigh: string;
    english: string;
    pronunciation: string;
}
