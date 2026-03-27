// Cursor
const cur=document.getElementById('cursor'),ring=document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
if(cur){
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx-4+'px';cur.style.top=my-4+'px'});
  function animRing(){rx+=(mx-rx-16)*.1;ry+=(my-ry-16)*.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing)}
  animRing();
  document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',()=>ring.classList.add('hover'));el.addEventListener('mouseleave',()=>ring.classList.remove('hover'))});
}

// Stars canvas
const canvas=document.getElementById('starsCanvas');
if(canvas){
  const ctx=canvas.getContext('2d');
  let stars=[];
  function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;stars=[];for(let i=0;i<220;i++){stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.8+.3,speed:Math.random()*.3+.05,opacity:Math.random(),pulse:Math.random()*Math.PI*2})}}
  function drawStars(){ctx.clearRect(0,0,canvas.width,canvas.height);stars.forEach(s=>{s.pulse+=.02;s.opacity=.15+Math.sin(s.pulse)*.5+.35;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle=`rgba(255,255,255,${Math.max(0,Math.min(1,s.opacity))})`;ctx.fill()});requestAnimationFrame(drawStars)}
  resize();window.addEventListener('resize',resize);drawStars();
}

// Nav
const mBtn=document.getElementById('mobileBtn'),navLinks=document.getElementById('navLinks');
if(mBtn){mBtn.addEventListener('click',()=>navLinks.classList.toggle('open'))}

// Nav scroll effect
window.addEventListener('scroll',()=>{const nav=document.querySelector('nav');if(nav){nav.style.background=window.scrollY>50?'rgba(3,3,10,0.95)':'rgba(3,3,10,0.8)'}});

// Intersection observer for fade-up
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));

// Nav build
window.buildNav=function(active){
  const links=[{href:'index.html',label:'Inicio',id:'home'},{href:'servicios.html',label:'Servicios',id:'servicios'},{href:'portafolio.html',label:'Portafolio',id:'portafolio'},{href:'artistas.html',label:'Artistas',id:'artistas'},{href:'tienda.html',label:'Tienda',id:'tienda'},{href:'blog.html',label:'Blog',id:'blog'},{href:'nosotros.html',label:'Nosotros',id:'nosotros'}];
  const html=links.map(l=>`<a href="${l.href}" class="${l.id===active?'active':''}">${l.label}</a>`).join('');
  return`<a href="index.html" class="nav-logo"><img src="logo.png" alt="Terrivol Music"></a><div class="nav-links" id="navLinks">${html}<a href="contacto.html" class="nav-cta">CONTACT</a></div><button class="nav-mobile-btn" id="mobileBtn">☰</button>`;
};
window.buildNavSub=function(active){
  const links=[{href:'../index.html',label:'Inicio',id:'home'},{href:'../servicios.html',label:'Servicios',id:'servicios'},{href:'../portafolio.html',label:'Portafolio',id:'portafolio'},{href:'../artistas.html',label:'Artistas',id:'artistas'},{href:'../tienda.html',label:'Tienda',id:'tienda'},{href:'../blog.html',label:'Blog',id:'blog'}];
  const html=links.map(l=>`<a href="${l.href}" class="${l.id===active?'active':''}">${l.label}</a>`).join('');
  return`<a href="../index.html" class="nav-logo"><img src="../logo.png" alt="Terrivol Music"></a><div class="nav-links" id="navLinks">${html}<a href="../contacto.html" class="nav-cta">CONTACT</a></div><button class="nav-mobile-btn" id="mobileBtn">☰</button>`;
};

// Form submit
window.submitForm=function(){
  const n=document.getElementById('f-nombre')?.value,e=document.getElementById('f-email')?.value,s=document.getElementById('f-servicio')?.value;
  if(!n||!e||!s){alert('Please complete name, email and service.');return}
  document.getElementById('formContent').style.display='none';
  document.getElementById('formSuccess').style.display='block';
};
