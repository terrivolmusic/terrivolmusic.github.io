// main.js - Versión limpia sin conflictos
document.addEventListener('DOMContentLoaded', function() {
  
  // Cursor personalizado
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');
  
  if (cursor && cursorRing) {
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursorRing.style.left = (e.clientX - 16) + 'px';
      cursorRing.style.top = (e.clientY - 16) + 'px';
    });

    // Efecto hover en enlaces y cards
    const hoverElements = document.querySelectorAll('a, button, .service-card, .portfolio-card');
    hoverElements.forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        cursorRing.classList.add('hover');
      });
      el.addEventListener('mouseleave', function() {
        cursorRing.classList.remove('hover');
      });
    });
  }

  // Animaciones fade-up
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(function(el) {
    observer.observe(el);
  });
});
