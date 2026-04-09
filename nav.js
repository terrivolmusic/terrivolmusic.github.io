<nav>
  <div class="nav-container">
    <a href="index.html" class="nav-logo">
      <img src="logo.png" alt="Terrivol Music">
    </a>
    
    <div class="nav-links" id="navLinks">
      <a href="index.html" class="active">Inicio</a>
      <a href="servicios.html">Servicios</a>
      <a href="portafolio.html">Portafolio</a>
      <a href="artistas.html">Artistas</a>
      <a href="tienda.html">Tienda</a>
      <a href="blog.html">Blog</a>
      <a href="nosotros.html">Nosotros</a>
      <a href="contacto.html" class="nav-cta-mobile">💼 TRABAJEMOS</a>
    </div>
    
    <button class="nav-mobile-btn" onclick="toggleMenu()">☰</button>
  </div>
</nav>

<script>
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('open');
  
  const btn = document.querySelector('.nav-mobile-btn');
  if (navLinks.classList.contains('open')) {
    btn.innerHTML = '✕';
  } else {
    btn.innerHTML = '☰';
  }
}
</script>
