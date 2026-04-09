// nav.js - Sistema de navegación simple y robusto
(function() {
  'use strict';
  
  window.buildNav = function(activePage) {
    const placeholder = document.getElementById('nav-placeholder');
    if (!placeholder) return;
    
    const links = [
      { id: 'home', label: 'Inicio', href: 'index.html' },
      { id: 'servicios', label: 'Servicios', href: 'servicios.html' },
      { id: 'portafolio', label: 'Portafolio', href: 'portafolio.html' },
      { id: 'artistas', label: 'Artistas', href: 'artistas.html' },
      { id: 'tienda', label: 'Tienda', href: 'tienda.html' }
    ];
    
    let navHTML = '<div class="nav-container container">';
    navHTML += '<a href="index.html" class="nav-logo"><img src="logo.png" alt="Terrivol Music"></a>';
    navHTML += '<div class="nav-links" id="navLinks">';
    
    links.forEach(function(link) {
      const activeClass = (activePage === link.id) ? ' active' : '';
      navHTML += '<a href="' + link.href + '" class="' + activeClass + '">' + link.label + '</a>';
    });
    
    navHTML += '<a href="contacto.html" class="nav-cta-mobile">💼 TRABAJEMOS</a>';
    navHTML += '</div>';
    navHTML += '<button class="nav-mobile-btn" id="mobileBtn">☰</button>';
    navHTML += '</div>';
    
    placeholder.innerHTML = navHTML;
    
    // Inicializar menú móvil
    const btn = document.getElementById('mobileBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (btn && navLinks) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('open');
        btn.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
      });
      
      // Cerrar al hacer click fuera
      document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !btn.contains(e.target)) {
          navLinks.classList.remove('open');
          btn.textContent = '☰';
        }
      });
      
      // Cerrar al clicar un enlace
      navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          navLinks.classList.remove('open');
          btn.textContent = '☰';
        });
      });
    }
  };
})();
