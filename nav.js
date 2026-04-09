/**
/**
 * Terrivol Music Navigation System
 * Centralized navigation builder and mobile menu control
 */

function buildNav(activePage, isSubDir = false) {
  const prefix = isSubDir ? '../' : '';
  const links = [
    { id: 'home', label: 'Inicio', href: 'index.html' },
    { id: 'servicios', label: 'Servicios', href: 'servicios.html' },
    { id: 'portafolio', label: 'Portafolio', href: 'portafolio.html' },
    { id: 'artistas', label: 'Artistas', href: 'artistas.html' },
    { id: 'tienda', label: 'Tienda', href: 'tienda.html' },
    { id: 'blog', label: 'Blog', href: 'blog.html' },
    { id: 'nosotros', label: 'Nosotros', href: 'nosotros.html' }
  ];

  const navHtml = `
    <div class="nav-container container">
      <a href="${prefix}index.html" class="nav-logo">
        <img src="${prefix}logo.png" alt="Terrivol Music" style="height:36px;display:block">
      </a>
      
      <div class="nav-links" id="navLinks">
        ${links.map(link => `
          <a href="${prefix}${link.href}" class="${activePage === link.id ? 'active' : ''}">${link.label}</a>
        `).join('')}
        <a href="${prefix}contacto.html" class="nav-cta-mobile">💼 TRABAJEMOS</a>
      </div>
      
      <button class="nav-mobile-btn" id="mobileBtn" aria-label="Menu">
        <span class="icon">☰</span>
      </button>
    </div>
  `;

  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) {
    placeholder.innerHTML = navHtml;
    initMobileMenu();
  }
}

function initMobileMenu() {
  const btn = document.getElementById('mobileBtn');
  const links = document.getElementById('navLinks');
  const icon = btn?.querySelector('.icon');

  if (btn && links) {
    btn.onclick = (e) => {
      e.stopPropagation();
      links.classList.toggle('open');
      if(icon) icon.innerText = links.classList.contains('open') ? '✕' : '☰';
    };

    document.onclick = (e) => {
      if (!links.contains(e.target) && !btn.contains(e.target)) {
        links.classList.remove('open');
        if(icon) icon.innerText = '☰';
      }
    };

    links.querySelectorAll('a').forEach(link => {
      link.onclick = () => {
        links.classList.remove('open');
        if(icon) icon.innerText = '☰';
      };
    });
  }
}
