document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content-area');
    const navItems = document.querySelectorAll('.nav-item');

    let AppData = {};
    let activeSection = 'Alphabet';

    async function fetchData() {
        try {
            const [alphabet, vocabulary, grammar, basics] = await Promise.all([
                fetch('./data/alphabet.txt').then(res => res.json()),
                fetch('./data/vocabulary.txt').then(res => res.json()),
                fetch('./data/grammar.txt').then(res => res.json()),
                fetch('./data/basics.txt').then(res => res.json()),
            ]);
            AppData = { alphabet, vocabulary, grammar, basics };
            renderContent(activeSection);
        } catch (error) {
            contentArea.innerHTML = `<p class="text-red-500 p-4">Failed to load learning data. Please try again later.</p>`;
            console.error('Data fetching error:', error);
        }
    }

    function renderAlphabet(data) {
        const lettersGrid = data.map(letter => `
            <div class="alphabet-card-container group perspective-1000 cursor-pointer">
              <div class="alphabet-card-flipper relative w-full h-28 transform-style-3d transition-transform duration-500">
                <div class="absolute w-full h-full backface-hidden bg-white dark:bg-slate-800 rounded-lg shadow-md flex items-center justify-center border border-slate-200 dark:border-slate-700">
                  <span class="text-5xl font-bold text-cyan-500">${letter.tifinagh}</span>
                </div>
                <div class="absolute w-full h-full backface-hidden bg-cyan-500 dark:bg-cyan-600 rounded-lg shadow-lg flex flex-col items-center justify-center rotate-y-180 text-white">
                  <p class="text-2xl font-bold">${letter.latin}</p>
                  <p class="text-sm">${letter.name}</p>
                </div>
              </div>
            </div>
        `).join('');

        contentArea.innerHTML = `
            <div>
              <h2 class="text-3xl font-bold mb-2 text-slate-900 dark:text-white">The Tifinagh Alphabet</h2>
              <p class="mb-6 text-slate-600 dark:text-slate-400">Tifinagh is the script used to write Amazigh languages. Click on a letter to see its details.</p>
              <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                ${lettersGrid}
              </div>
            </div>
        `;
    }

    function renderVocabulary(data, activeCategory = data[0].category) {
        const categoryButtons = data.map(cat => `
            <button class="category-button px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat.category ? 'bg-cyan-500 text-white shadow' : 'bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600'}" data-category="${cat.category}">
                ${cat.category}
            </button>
        `).join('');

        const currentWords = data.find(cat => cat.category === activeCategory)?.words || [];
        const wordCards = currentWords.map(word => `
            <div class="vocab-card-container perspective-1000 cursor-pointer">
              <div class="vocab-card-flipper relative w-full h-40 transform-style-3d transition-transform duration-500">
                <div class="absolute w-full h-full backface-hidden bg-white dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center justify-center p-4 border border-slate-200 dark:border-slate-700">
                  <p class="text-3xl font-semibold text-cyan-500">${word.amazigh}</p>
                  ${word.pronunciation ? `<p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">(${word.pronunciation})</p>` : ''}
                </div>
                <div class="absolute w-full h-full backface-hidden bg-cyan-500 dark:bg-cyan-600 rounded-xl shadow-lg flex items-center justify-center p-4 rotate-y-180">
                  <p class="text-3xl font-semibold text-white">${word.english}</p>
                </div>
              </div>
            </div>
        `).join('');

        contentArea.innerHTML = `
            <div>
              <h2 class="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Vocabulary</h2>
              <p class="mb-6 text-slate-600 dark:text-slate-400">Learn new words with flashcards. Click a card to flip it over.</p>
              <div class="flex flex-wrap gap-2 mb-6">${categoryButtons}</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">${wordCards}</div>
            </div>
        `;
    }

    function renderGrammar(data) {
        const rules = data.map(rule => `
            <div class="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700">
              <h3 class="text-xl font-bold text-cyan-500 mb-3">${rule.title}</h3>
              <p class="text-slate-700 dark:text-slate-300 mb-4">${rule.explanation}</p>
              <div class="border-t border-slate-200 dark:border-slate-700 pt-4">
                <h4 class="font-semibold mb-2 text-slate-800 dark:text-slate-200">Examples:</h4>
                <ul class="space-y-2">
                  ${rule.examples.map(ex => `
                    <li class="flex flex-col sm:flex-row justify-between p-2 rounded-md bg-slate-100 dark:bg-slate-700/50">
                      <span class="font-mono text-cyan-600 dark:text-cyan-400">${ex.amazigh}</span>
                      <span class="text-slate-500 dark:text-slate-400 sm:text-right">${ex.english}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
        `).join('');

        contentArea.innerHTML = `
            <div>
              <h2 class="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Grammar Essentials</h2>
              <p class="mb-6 text-slate-600 dark:text-slate-400">Understand the basic rules of Amazigh grammar.</p>
              <div class="space-y-6">${rules}</div>
            </div>
        `;
    }

    function renderBasics(data) {
        const phrases = data.map(phrase => `
            <div class="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <p class="text-lg font-semibold text-cyan-500">${phrase.amazigh}</p>
                <p class="text-slate-500 dark:text-slate-400 text-sm">(${phrase.pronunciation})</p>
              </div>
              <p class="mt-2 md:mt-0 text-slate-700 dark:text-slate-300 font-medium">${phrase.english}</p>
            </div>
        `).join('');

        contentArea.innerHTML = `
            <div>
              <h2 class="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Basic Phrases</h2>
              <p class="mb-6 text-slate-600 dark:text-slate-400">Learn essential phrases for everyday conversations.</p>
              <div class="space-y-4">${phrases}</div>
            </div>
        `;
    }

    function renderContent(section) {
        activeSection = section;
        updateNav();
        contentArea.innerHTML = `<div class="text-center p-8 text-slate-500">Loading...</div>`;

        switch(section) {
            case 'Alphabet': renderAlphabet(AppData.alphabet); break;
            case 'Vocabulary': renderVocabulary(AppData.vocabulary); break;
            case 'Grammar': renderGrammar(AppData.grammar); break;
            case 'Basics': renderBasics(AppData.basics); break;
            default: renderAlphabet(AppData.alphabet);
        }
    }

    function updateNav() {
        navItems.forEach(item => {
            if (item.dataset.section === activeSection) {
                item.classList.add('bg-cyan-500', 'text-white', 'shadow-lg');
                item.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-200', 'dark:hover:bg-slate-700');
            } else {
                item.classList.remove('bg-cyan-500', 'text-white', 'shadow-lg');
                item.classList.add('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-200', 'dark:hover:bg-slate-700');
            }
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            if (section) renderContent(section);
        });
    });

    contentArea.addEventListener('click', (event) => {
        const vocabCard = event.target.closest('.vocab-card-container');
        if (vocabCard) {
            vocabCard.querySelector('.vocab-card-flipper').classList.toggle('rotate-y-180');
        }

        const alphabetCard = event.target.closest('.alphabet-card-container');
        if (alphabetCard) {
             alphabetCard.querySelector('.alphabet-card-flipper').classList.toggle('rotate-y-180');
        }

        const categoryButton = event.target.closest('.category-button');
        if (categoryButton) {
            const category = categoryButton.dataset.category;
            if (category) renderVocabulary(AppData.vocabulary, category);
        }
    });

    fetchData();
});
