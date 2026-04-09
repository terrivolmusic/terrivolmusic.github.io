// Cursor personalizado
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

if (cursor && cursorRing) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorRing.style.left = (e.clientX - 16) + 'px';
    cursorRing.style.top = (e.clientY - 16) + 'px';
  });

  // Efecto hover
  const hoverElements = document.querySelectorAll('a, button, .service-card, .portfolio-card');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorRing.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursorRing.classList.remove('hover');
    });
  });
}

// Animaciones fade-up
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => {
  observer.observe(el);
});
