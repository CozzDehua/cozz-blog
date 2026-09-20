(() => {
  'use strict';
  const nodes = [...document.querySelectorAll('[data-zh]')].map(element => ({
    element,
    en: element.textContent,
    zh: element.dataset.zh
  }));
  const labels = [...document.querySelectorAll('[data-zh-label]')].map(element => ({
    element,
    en: element.getAttribute('aria-label'),
    zh: element.dataset.zhLabel
  }));
  const buttons = [...document.querySelectorAll('[data-language]')];
  const setLanguage = language => {
    const lang = language === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    nodes.forEach(item => { item.element.textContent = item[lang]; });
    labels.forEach(item => { item.element.setAttribute('aria-label', item[lang]); });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === lang)));
    try { localStorage.setItem('cozz-language', lang); } catch { /* Continue when storage is unavailable. */ }
  };
  let saved = 'en';
  try { saved = localStorage.getItem('cozz-language') || 'en'; } catch { /* English is the fallback. */ }
  setLanguage(saved);
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  document.querySelectorAll('.language-switch').forEach(element => { element.hidden = false; });
})();
