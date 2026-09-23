const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');

const languageSelects = document.querySelectorAll('[data-language-select]');
const supportedLanguages = ['pt', 'en', 'fr', 'es', 'zh', 'ja'];
const savedLanguage = window.localStorage.getItem('robb-studios-language');
const initialLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'pt';

languageSelects.forEach((select) => {
  select.value = initialLanguage;
  select.addEventListener('change', () => {
    const language = select.value;
    if (!supportedLanguages.includes(language)) return;
    window.localStorage.setItem('robb-studios-language', language);
    languageSelects.forEach((otherSelect) => { otherSelect.value = language; });
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
  });
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
