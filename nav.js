/**
 * Terrivol Music Navigation System
 */

function buildNav(activePage) {
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
      <a href="index.html" class="nav-logo">
        <img src="logo.png" alt="Terrivol Music">
      </a>
      
      <div class="nav-links" id="navLinks">
        ${links.map(link => `
          <a href="${link.href}" class="${activePage === link.id ? 'active' : ''}">${link.label}</a>
        `).join('')}
        <a href="contacto.html" class="nav-cta-mobile">💼 TRABAJEMOS</a>
      </div>
      
      <button class="nav-mobile-btn" id="mobileBtn" aria-label="Menu">☰</button>
    </div>
  `;

  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) {
    placeholder.innerHTML = navHtml;
    initMobileMenu();
  } else {
    console.error('No se encontró nav-placeholder');
  }
}

function initMobileMenu() {
  const btn = document.getElementById('mobileBtn');
  const links = document.getElementById('navLinks');
  
  if (btn && links) {
    btn.onclick = function(e) {
      e.stopPropagation();
      links.classList.toggle('open');
      const icon = btn.querySelector('.icon') || btn;
      icon.textContent = links.classList.contains('open') ? '✕' : '☰';
    };

    document.onclick = function(e) {
      if (!links.contains(e.target) && !btn.contains(e.target)) {
        links.classList.remove('open');
        const icon = btn.querySelector('.icon') || btn;
        icon.textContent = '☰';
      }
    };

    links.querySelectorAll('a').forEach(function(link) {
      link.onclick = function() {
        links.classList.remove('open');
        const icon = btn.querySelector('.icon') || btn;
        icon.textContent = '☰';
      };
    });
  }
}
