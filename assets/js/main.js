const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');

const supportedLanguages = ['pt', 'en', 'fr', 'es', 'zh', 'ja'];
const languageNames = { pt: 'Português', en: 'English', fr: 'Français', es: 'Español', zh: '简体中文', ja: '日本語' };
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
  });
}

languageSwitchers.forEach((switcher) => {
  const oldSelect = switcher.querySelector('[data-language-select]');
  if (oldSelect) oldSelect.remove();
  const nav = switcher.closest('.nav');
  if (nav) nav.appendChild(switcher);
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
      const language = option.dataset.languageOption;
      window.localStorage.setItem('robb-studios-language', language);
      document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
      updateLanguageButtons(language);
      closeLanguageMenus();
      switcher.querySelector('.language-options').hidden = true;
    });
  });
});

updateLanguageButtons(initialLanguage);
document.documentElement.lang = initialLanguage === 'pt' ? 'pt-BR' : initialLanguage;
document.addEventListener('click', (event) => {
  if (!event.target.closest('.language-switcher')) closeLanguageMenus();
});

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? 'Fechar' : 'Menu';
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
