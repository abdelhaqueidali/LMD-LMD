
import { Letter, VocabularyCategory, GrammarRule, BasicPhrase } from './types';

export const ALPHABET_DATA: Letter[] = [
  { tifinagh: 'ⴰ', latin: 'a', name: 'ya' },
  { tifinagh: 'ⴱ', latin: 'b', name: 'yab' },
  { tifinagh: 'ⴳ', latin: 'g', name: 'yag' },
  { tifinagh: 'ⴷ', latin: 'd', name: 'yad' },
  { tifinagh: 'ⴹ', latin: 'ḍ', name: 'yaḍ' },
  { tifinagh: 'ⴻ', latin: 'e', name: 'yey' },
  { tifinagh: 'ⴼ', latin: 'f', name: 'yaf' },
  { tifinagh: 'ⴽ', latin: 'k', name: 'yak' },
  { tifinagh: 'ⵀ', latin: 'h', name: 'yah' },
  { tifinagh: 'ⵃ', latin: 'ḥ', name: 'yaḥ' },
  { tifinagh: 'ⵄ', latin: 'ɛ', name: 'yaɛ' },
  { tifinagh: 'ⵅ', latin: 'x', name: 'yax' },
  { tifinagh: 'ⵇ', latin: 'q', name: 'yaq' },
  { tifinagh: 'ⵉ', latin: 'i', name: 'yi' },
  { tifinagh: 'ⵊ', latin: 'j', name: 'yaj' },
  { tifinagh: 'ⵍ', latin: 'l', name: 'yal' },
  { tifinagh: 'ⵎ', latin: 'm', name: 'yam' },
  { tifinagh: 'ⵏ', latin: 'n', name: 'yan' },
  { tifinagh: 'ⵓ', latin: 'u', name: 'yu' },
  { tifinagh: 'ⵔ', latin: 'r', name: 'yar' },
  { tifinagh: 'ⵕ', latin: 'ṛ', name: 'yaṛ' },
  { tifinagh: 'ⵖ', latin: 'ɣ', name: 'yaɣ' },
  { tifinagh: 'ⵙ', latin: 's', name: 'yas' },
  { tifinagh: 'ⵚ', latin: 'ṣ', name: 'yaṣ' },
  { tifinagh: 'ⵛ', latin: 'š', name: 'yaš' },
  { tifinagh: 'ⵜ', latin: 't', name: 'yat' },
  { tifinagh: 'ⵟ', latin: 'ṭ', name: 'yaṭ' },
  { tifinagh: 'ⵡ', latin: 'w', name: 'yaw' },
  { tifinagh: 'ⵢ', latin: 'y', name: 'yay' },
  { tifinagh: 'ⵣ', latin: 'z', name: 'yaz' },
  { tifinagh: 'ⵥ', latin: 'ẓ', name: 'yaẓ' },
  { tifinagh: 'ⵯ', latin: 'ʷ', name: 'yʷ' },
  { tifinagh: 'ⵊ', latin: 'j', name: 'yaj' },
];

export const VOCABULARY_DATA: VocabularyCategory[] = [
  {
    category: 'Greetings',
    words: [
      { amazigh: 'Azul', english: 'Hello', pronunciation: 'A-zool' },
      { amazigh: 'Manzakin?', english: 'How are you? (m)', pronunciation: 'Man-za-keen' },
      { amazigh: 'Manzakem?', english: 'How are you? (f)', pronunciation: 'Man-za-kem' },
      { amazigh: 'Labas', english: 'Fine', pronunciation: 'La-bass' },
      { amazigh: 'Tanemmirt', english: 'Thank you', pronunciation: 'Ta-nem-mirt' },
      { amazigh: 'Ar tufat', english: 'Goodbye', pronunciation: 'Ar too-fat' },
    ],
  },
  {
    category: 'Numbers',
    words: [
      { amazigh: 'Yiwen', english: 'One', pronunciation: 'Yee-wen' },
      { amazigh: 'Sin', english: 'Two', pronunciation: 'Seen' },
      { amazigh: 'Krad', english: 'Three', pronunciation: 'Krahd' },
      { amazigh: 'Kuz', english: 'Four', pronunciation: 'Kooz' },
      { amazigh: 'Semmus', english: 'Five', pronunciation: 'Sem-moos' },
      { amazigh: 'Sḍis', english: 'Six', pronunciation: 'Sdees' },
    ],
  },
  {
    category: 'Family',
    words: [
        { amazigh: 'Baba', english: 'Father', pronunciation: 'Ba-ba' },
        { amazigh: 'Yemma', english: 'Mother', pronunciation: 'Yem-ma' },
        { amazigh: 'Gma', english: 'Brother', pronunciation: 'Gma' },
        { amazigh: 'Weltma', english: 'Sister', pronunciation: 'Welt-ma' },
        { amazigh: 'Axxam', english: 'House/Home', pronunciation: 'Akh-kham'},
    ],
  },
];

export const GRAMMAR_DATA: GrammarRule[] = [
    {
        title: 'Nouns: Masculine & Feminine',
        explanation: 'In Amazigh, nouns have gender. Most masculine singular nouns begin with a vowel (usually "a"), while feminine singular nouns often start with "ta-" and end with "-t".',
        examples: [
            { amazigh: 'aryaz (ⴰⵔⵢⴰⵣ)', english: 'man (masculine)' },
            { amazigh: 'taryazt (ⵜⴰⵔⵢⴰⵣⵜ)', english: 'woman (feminine)' },
            { amazigh: 'afus (ⴰⴼⵓⵙ)', english: 'hand (masculine)' },
            { amazigh: 'tafust (ⵜⴰⴼⵓⵙⵜ)', english: 'small hand (feminine)' },
        ],
    },
    {
        title: 'Plurals',
        explanation: 'Pluralization can be complex. A common pattern for masculine nouns is changing the initial "a-" to "i-" and adding "-en" at the end. For feminine nouns, "ta-...-t" can become "ti-...-in".',
        examples: [
            { amazigh: 'aryaz (ⴰⵔⵢⴰⵣ)', english: 'man' },
            { amazigh: 'iriyazen (ⵉⵔⵢⴰⵣⴻⵏ)', english: 'men' },
            { amazigh: 'taddart (ⵜⴰⴷⴷⴰⵔⵜ)', english: 'house' },
            { amazigh: 'tiddar (ⵜⵉⴷⴷⴰⵔ)', english: 'houses' },
        ],
    },
    {
        title: 'Sentence Structure',
        explanation: 'The basic sentence structure is often Verb-Subject-Object (VSO), which is different from English (SVO).',
        examples: [
            { amazigh: 'Yekcem urgazaxxam.', english: 'The man entered the house.' },
            { amazigh: 'Literal: Entered man house.', english: '' },
            { amazigh: 'Teca tislit taɣrumt.', english: 'The bride ate the bread.' },
            { amazigh: 'Literal: Ate bride bread.', english: '' },
        ]
    }
];

export const BASICS_DATA: BasicPhrase[] = [
    { amazigh: 'Isma-inu ...', english: 'My name is ...', pronunciation: 'Isma-eenu ...' },
    { amazigh: 'Mani tekid?', english: 'Where are you from?', pronunciation: 'Ma-ni te-keed' },
    { amazigh: 'Nekk d ...', english: 'I am from ...', pronunciation: 'Nek d ...' },
    { amazigh: 'Ur fhimeɣ ara', english: 'I don\'t understand', pronunciation: 'Oor fhe-megh a-ra' },
    { amazigh: 'Ɛawd afak', english: 'Please repeat', pronunciation: 'Aowd a-fak' },
    { amazigh: 'Suref-iyi', english: 'Excuse me / Sorry', pronunciation: 'Soo-ref-ee-yee' }
];
