function buildNav(activePage) {
  return `
    <div class="nav-container">
      <a href="index.html" class="nav-logo">
        <img src="logo.png" alt="Terrivol Music">
      </a>
      <button class="nav-mobile-btn" onclick="document.querySelector('.nav-links').classList.toggle('open')">☰</button>
      <div class="nav-links">
        <a href="index.html" class="${activePage==='home'?'active':''}">Inicio</a>
        <a href="servicios.html" class="${activePage==='servicios'?'active':''}">Servicios</a>
        <a href="portafolio.html" class="${activePage==='portafolio'?'active':''}">Portafolio</a>
        <a href="artistas.html" class="${activePage==='artistas'?'active':''}">Artistas</a>
        <a href="tienda.html" class="${activePage==='tienda'?'active':''}">Tienda</a>
        <a href="blog.html" class="${activePage==='blog'?'active':''}">Blog</a>
        <a href="nosotros.html" class="${activePage==='nosotros'?'active':''}">Nosotros</a>
        <a href="contacto.html" class="nav-cta">TRABAJEMOS</a>
      </div>
    </div>
  `;
}
