(() => {
  const siteUrl = 'https://cantikdanmenarik02-dev.github.io/cantik2/';
  const siteName = 'Lencak Android Studio';
  const description = 'Lencak Android Studio adalah studio pengembang aplikasi Android yang merancang dan membangun aplikasi cepat, intuitif, dan berdampak.';
  const keywords = 'Lencak Android Studio, developer Android Indonesia, jasa pembuatan aplikasi Android, Android app development, UI UX aplikasi, aplikasi Android profesional';

  const setMeta = (attribute, key, content) => {
    let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
    if (!tag) { tag = document.createElement('meta'); tag.setAttribute(attribute, key); document.head.appendChild(tag); }
    tag.setAttribute('content', content);
  };
  const addLink = (rel, href) => {
    if (!document.head.querySelector(`link[rel="${rel}"]`)) {
      const link = document.createElement('link'); link.rel = rel; link.href = href; document.head.appendChild(link);
    }
  };

  const init = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle?.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
      navLinks.classList.remove('open'); menuToggle?.setAttribute('aria-expanded', 'false');
    }));

    const loadMore = document.querySelector('.load-more');
    const projectGrid = document.querySelector('.project-grid');
    const hiddenProjects = projectGrid ? [...projectGrid.querySelectorAll('.project-card:nth-child(n+5)')] : [];
    hiddenProjects.forEach((card) => { card.hidden = true; });
    loadMore?.addEventListener('click', () => {
      hiddenProjects.forEach((card) => { card.hidden = false; });
      projectGrid?.classList.add('is-expanded');
      loadMore.textContent = 'Semua karya sudah ditampilkan ✓'; loadMore.disabled = true;
    });

    const year = document.querySelector('#year');
    if (year) year.textContent = new Date().getFullYear();
    const footer = document.querySelector('.footer');
    if (footer && !footer.querySelector('.privacy-link')) {
      const link = document.createElement('a'); link.className = 'privacy-link'; link.href = 'privacy-policy.html'; link.textContent = 'Privacy Policy';
      footer.querySelector('.socials')?.appendChild(link);
    }

    // Structured data helps search engines understand the studio and its services.
    if (!document.querySelector('script[data-seo-schema]')) {
      const schema = document.createElement('script'); schema.type = 'application/ld+json'; schema.dataset.seoSchema = 'true';
      schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: siteName, url: siteUrl, description, email: 'hello@lencakstudio.com', knowsAbout: ['Android development', 'Mobile app design', 'User experience design'], sameAs: [siteUrl] });
      document.head.appendChild(schema);
    }
  };

  setMeta('name', 'description', description); setMeta('name', 'keywords', keywords); setMeta('name', 'author', siteName); setMeta('name', 'robots', 'index, follow, max-image-preview:large');
  setMeta('property', 'og:type', 'website'); setMeta('property', 'og:url', siteUrl); setMeta('property', 'og:title', `${siteName} — Build apps people love`); setMeta('property', 'og:description', description); setMeta('property', 'og:site_name', siteName);
  setMeta('name', 'twitter:card', 'summary'); setMeta('name', 'twitter:title', `${siteName} — Build apps people love`); setMeta('name', 'twitter:description', description);
  addLink('canonical', siteUrl);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
