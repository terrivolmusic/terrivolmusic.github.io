// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
if(cursor){
  document.addEventListener('mousemove',e=>{ mx=e.clientX;my=e.clientY;cursor.style.left=mx-5+'px';cursor.style.top=my-5+'px'; });
  function animRing(){ rx+=(mx-rx-18)*.12;ry+=(my-ry-18)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing); }
  animRing();
}

// Stars
const starsEl = document.getElementById('stars');
if(starsEl){
  for(let i=0;i<180;i++){
    const s=document.createElement('div');
    const sz=Math.random()*2.5+0.5;
    s.className='star';
    s.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--dur:${2+Math.random()*4}s;--delay:${Math.random()*5}s;--min-op:${0.05+Math.random()*.2};--max-op:${0.4+Math.random()*.6}`;
    starsEl.appendChild(s);
  }
}

// Mobile nav
const mobileBtn = document.getElementById('mobileBtn');
const navLinks = document.getElementById('navLinks');
if(mobileBtn){ mobileBtn.addEventListener('click',()=>navLinks.classList.toggle('open')); }

// Fade-up observer
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){e.target.style.animationPlayState='running';obs.unobserve(e.target);} });
},{threshold:0.1});
document.querySelectorAll('.fade-up').forEach(el=>{el.style.animationPlayState='paused';obs.observe(el);});

// Form submit
window.submitForm = function(){
  const nombre=document.getElementById('f-nombre')?.value;
  const email=document.getElementById('f-email')?.value;
  const servicio=document.getElementById('f-servicio')?.value;
  if(!nombre||!email||!servicio){alert('Por favor completa nombre, email y servicio.');return;}
  document.getElementById('formContent').style.display='none';
  document.getElementById('formSuccess').style.display='block';
};
