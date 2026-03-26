// Nav HTML - inject via: document.getElementById('nav-placeholder').innerHTML = buildNav('home')
window.buildNav = function(active){
  const links = [
    {href:'index.html', label:'Inicio', id:'home'},
    {href:'servicios.html', label:'Servicios', id:'servicios'},
    {href:'portafolio.html', label:'Portafolio', id:'portafolio'},
    {href:'artistas.html', label:'Artistas', id:'artistas'},
    {href:'tienda.html', label:'Tienda', id:'tienda'},
    {href:'blog.html', label:'Blog', id:'blog'},
    {href:'nosotros.html', label:'Nosotros', id:'nosotros'},
  ];
  const linkHTML = links.map(l=>`<a href="${l.href}" class="${l.id===active?'active':''}">${l.label}</a>`).join('');
  return `
  <a href="index.html" class="nav-logo"><img src="logo.png" alt="Terrivol Music"></a>
  <div class="nav-links" id="navLinks">${linkHTML}<a href="contacto.html" class="nav-cta">TRABAJEMOS</a></div>
  <button class="nav-mobile-btn" id="mobileBtn">☰</button>`;
};
