// Nav HTML - inject via: document.getElementById('nav-placeholder').innerHTML = buildNav('home')
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
      <div class="nav-links">
        ${links}
      </div>
      <a href="contacto.html" class="nav-cta">TRABAJEMOS</a>
      <button class="nav-toggle" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-container');
  
  if (toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
    });
  }
});
