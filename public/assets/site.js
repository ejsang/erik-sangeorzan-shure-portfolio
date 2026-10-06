document.documentElement.classList.add('js');
const menuButton = document.querySelector('.nav-toggle');
const navigation = document.getElementById('primary-nav');
const closeMenu = () => {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
};
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 1021px)').addEventListener('change', closeMenu);
