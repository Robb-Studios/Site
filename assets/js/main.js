const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const supportedLanguages = ['pt', 'en', 'fr', 'es', 'zh', 'ja'];
const languageNames = { pt: 'Português', en: 'English', fr: 'Français', es: 'Español', zh: '简体中文', ja: '日本語' };
const cacheTtl = 2 * 60 * 60 * 1000;
const savedLanguage = window.localStorage.getItem('robb-studios-language');
const initialLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'pt';
const languageSwitchers = document.querySelectorAll('.language-switcher');
const languageOptions = supportedLanguages.map((language) => `
  <button type="button" class="language-option" data-language-option="${language}" role="option">
    <span class="flag flag-${language}" aria-hidden="true"></span><span>${languageNames[language]}</span>
  </button>
`).join('');

function updateLanguageButtons(language) {
  languageSwitchers.forEach((switcher) => {
    const button = switcher.querySelector('[data-language-button]');
    const flag = button?.querySelector('.flag');
    const code = button?.querySelector('.language-code');
    if (!button || !flag || !code) return;
    flag.className = `flag flag-${language}`;
    code.textContent = language.toUpperCase();
    button.setAttribute('aria-label', `Idioma: ${languageNames[language]}`);
    switcher.querySelectorAll('[data-language-option]').forEach((option) => {
      option.setAttribute('aria-selected', String(option.dataset.languageOption === language));
    });
  });
}

function closeLanguageMenus() {
  languageSwitchers.forEach((switcher) => {
    switcher.classList.remove('open');
    switcher.querySelector('[data-language-button]')?.setAttribute('aria-expanded', 'false');
    const options = switcher.querySelector('.language-options');
    if (options) options.hidden = true;
  });
}

languageSwitchers.forEach((switcher) => {
  switcher.querySelector('[data-language-select]')?.remove();
  const nav = switcher.closest('.nav');
  if (nav && menuButton) nav.insertBefore(switcher, menuButton);
  switcher.insertAdjacentHTML('afterbegin', `
    <button type="button" class="language-button" data-language-button aria-expanded="false" aria-haspopup="listbox">
      <span class="flag flag-${initialLanguage}" aria-hidden="true"></span><span class="language-code">${initialLanguage.toUpperCase()}</span><span class="language-chevron" aria-hidden="true">⌄</span>
    </button>
    <div class="language-options" role="listbox" hidden>${languageOptions}</div>
  `);
  const button = switcher.querySelector('[data-language-button]');
  button.addEventListener('click', () => {
    const willOpen = !switcher.classList.contains('open');
    closeLanguageMenus();
    switcher.classList.toggle('open', willOpen);
    button.setAttribute('aria-expanded', String(willOpen));
    switcher.querySelector('.language-options').hidden = !willOpen;
  });
  switcher.querySelectorAll('[data-language-option]').forEach((option) => {
    option.addEventListener('click', () => {
      const language = String(option.dataset.languageOption || '').trim();
      if (!supportedLanguages.includes(language)) return;
      window.localStorage.setItem('robb-studios-language', language);
      window.location.reload();
    });
  });
});

updateLanguageButtons(initialLanguage);
document.addEventListener('click', (event) => {
  if (!event.target.closest('.language-switcher')) closeLanguageMenus();
});

async function loadTranslations(language) {
  const cacheKey = `robb-studios-i18n-${language}-v1`;
  const cached = window.localStorage.getItem(cacheKey);
  if (cached) {
    try {
      const entry = JSON.parse(cached);
      if (Date.now() - entry.cachedAt < cacheTtl) return entry.data;
    } catch { window.localStorage.removeItem(cacheKey); }
  }
  const response = await fetch(`/assets/i18n/${language}.json`, {
    cache: 'default',
    headers: { 'Cache-Control': 'max-age=7200' }
  });
  if (!response.ok) throw new Error(`Translation resource failed: ${response.status}`);
  const data = await response.json();
  window.localStorage.setItem(cacheKey, JSON.stringify({ cachedAt: Date.now(), data }));
  return data;
}

function translateVisibleText(translations) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const key = node.nodeValue.trim();
    if (!key || !translations[key]) return;
    node.nodeValue = node.nodeValue.replace(key, translations[key]);
  });
  document.querySelectorAll('[aria-label]').forEach((node) => {
    const label = node.getAttribute('aria-label');
    if (translations[label]) node.setAttribute('aria-label', translations[label]);
  });
  if (translations.__titleByPage?.[document.title]) document.title = translations.__titleByPage[document.title];
}

async function applyLanguage(language) {
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
  try {
    const translations = await loadTranslations(language);
    translateVisibleText(translations);
  } catch (error) {
    console.error(error);
    if (language !== 'pt') {
      const fallback = await loadTranslations('pt');
      translateVisibleText(fallback);
    }
  }
}

applyLanguage(initialLanguage);

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? (initialLanguage === 'pt' ? 'Fechar' : 'Close') : (initialLanguage === 'pt' ? 'Menu' : 'Menu');
  });
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = 'Menu';
    });
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const revealNodes = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add('visible'));
}
