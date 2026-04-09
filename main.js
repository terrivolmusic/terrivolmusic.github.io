/**
 * Terrivol Music - Global Scripts
 * Handles animations, interactions, and utility functions
 */

// Intersection Observer for fade-up animations
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});

// Delay classes for staggered animations
const delays = {
  'delay-1': 0.1,
  'delay-2': 0.22,
  'delay-3': 0.34,
  'delay-4': 0.46,
  'delay-5': 0.58
};

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  .fade-up {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }
  ${Object.entries(delays).map(([cls, delay]) => 
    `.${cls} { transition-delay: ${delay}s; }`
  ).join('\n')}
`;
document.head.appendChild(style);

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Form submission handler (if needed)
window.submitForm = function(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;
  
  const nombre = form.querySelector('[name="nombre"]')?.value;
  const email = form.querySelector('[name="email"]')?.value;
  const mensaje = form.querySelector('[name="mensaje"]')?.value;
  
  if (!nombre || !email || !mensaje) {
    alert('Por favor completa todos los campos.');
    return false;
  }
  
  // Form will submit via Formspree
  return true;
};
