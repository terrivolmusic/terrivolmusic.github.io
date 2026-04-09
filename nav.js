// nav.js - Sistema de navegación
(function() {
  'use strict';
  
  window.buildNav = function(activePage) {
    const placeholder = document.getElementById('nav-placeholder');
    if (!placeholder) {
      console.error('No se encontró nav-placeholder');
      return;
    }
    
    const links = [
      { id: 'home', label: 'Inicio', href: 'index.html' },
      { id: 'servicios', label: 'Servicios', href: 'servicios.html' },
      { id: 'portafolio', label: 'Portafolio', href: 'portafolio.html' },
      { id: 'artistas', label: 'Artistas', href: 'artistas.html' },
      { id: 'tienda', label: 'Tienda', href: 'tienda.html' }
    ];
    
    let html = '<div class="nav-container container">';
    html += '<a href="index.html" class="nav-logo"><img src="logo.png" alt="Terrivol Music"></a>';
    html += '<div class="nav-links" id="navLinks">';
    
    links.forEach(function(link) {
      const activeClass = (activePage === link.id) ? ' active' : '';
      html += '<a href="' + link.href + '" class="' + activeClass + '">' + link.label + '</a>';
    });
    
    html += '<a href="contacto.html" class="nav-cta-mobile">💼 TRABAJEMOS</a>';
    html += '</div>';
    html += '<button class="nav-mobile-btn" id="mobileBtn">☰</button>';
    html += '</div>';
    
    placeholder.innerHTML = html;
    
    // Menú móvil
    const btn = document.getElementById('mobileBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (btn && navLinks) {
      btn.onclick = function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('open');
        btn.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
      };
      
      document.onclick = function(e) {
        if (!navLinks.contains(e.target) && !btn.contains(e.target)) {
          navLinks.classList.remove('open');
          btn.textContent = '☰';
        }
      };
      
      navLinks.querySelectorAll('a').forEach(function(link) {
        link.onclick = function() {
          navLinks.classList.remove('open');
          btn.textContent = '☰';
        };
      });
    }
  };
})();
