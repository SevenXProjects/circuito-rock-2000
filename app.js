
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible')}})},{threshold:.15});
reveals.forEach(el=>observer.observe(el));
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
toggle?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const glow=document.querySelector('.cursor-glow');
window.addEventListener('mousemove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';}});
window.addEventListener('scroll',()=>{document.querySelector('.site-header').classList.toggle('scrolled',window.scrollY>30)});
