const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');

function setMenu(open) {
  navLinks.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) setMenu(false);
  });
}
