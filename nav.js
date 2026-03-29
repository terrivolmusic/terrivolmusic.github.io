function buildNav(activePage) {
  const navItems = [
    { name: 'Inicio', href: 'index.html', id: 'home' },
    { name: 'Servicios', href: 'servicios.html', id: 'servicios' },
    { name: 'Portafolio', href: 'portafolio.html', id: 'portafolio' },
    { name: 'Artistas', href: 'artistas.html', id: 'artistas' },
    { name: 'Tienda', href: 'tienda.html', id: 'tienda' },
    { name: 'Blog', href: 'blog.html', id: 'blog' },
    { name: 'Nosotros', href: 'nosotros.html', id: 'nosotros' }
  ];

  const links = navItems.map(item => 
    `<a href="${item.href}" class="${activePage === item.id ? 'active' : ''}">${item.name}</a>`
  ).join('');

  return `
    <div class="nav-container">
      <a href="index.html" class="nav-logo">
        <img src="logo.png" alt="Terrivol Music">
      </a>
      <button class="nav-mobile-btn" aria-label="Menú">
        <span>☰</span>
      </button>
      <div class="nav-links">
        ${links}
        <a href="contacto.html" class="nav-cta">TRABAJEMOS</a>
      </div>
    </div>
  `;
}

// Mobile menu toggle - CORREGIDO
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-mobile-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.querySelector('span').textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
  }
  
  // Cerrar menú al hacer click en un link (móvil)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        document.querySelector('.nav-links')?.classList.remove('open');
        document.querySelector('.nav-mobile-btn span').textContent = '☰';
      }
    });
  });
});
