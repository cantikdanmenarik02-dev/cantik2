(() => {
  const init = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle?.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }));

    const loadMore = document.querySelector('.load-more');
    const projectGrid = document.querySelector('.project-grid');
    const hiddenProjects = projectGrid ? [...projectGrid.querySelectorAll('.project-card:nth-child(n+5)')] : [];

    // Hide only the extra projects initially, then reveal them reliably on click.
    hiddenProjects.forEach((card) => { card.hidden = true; });
    loadMore?.addEventListener('click', () => {
      hiddenProjects.forEach((card) => { card.hidden = false; });
      projectGrid?.classList.add('is-expanded');
      loadMore.textContent = 'Semua karya sudah ditampilkan ✓';
      loadMore.disabled = true;
      loadMore.classList.add('is-complete');
    });

    const year = document.querySelector('#year');
    if (year) year.textContent = new Date().getFullYear();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
