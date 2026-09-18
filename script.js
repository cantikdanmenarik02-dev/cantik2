const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => { const isOpen = navLinks.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(isOpen)); });
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => { navLinks.classList.remove('open'); menuToggle?.setAttribute('aria-expanded', 'false'); }));
const loadMore = document.querySelector('.load-more');
const projectGrid = document.querySelector('.project-grid');
loadMore?.addEventListener('click', () => { projectGrid.classList.add('is-expanded'); loadMore.textContent = 'Semua karya sudah ditampilkan ✓'; loadMore.disabled = true; loadMore.classList.add('is-complete'); });
document.querySelector('#year').textContent = new Date().getFullYear();
