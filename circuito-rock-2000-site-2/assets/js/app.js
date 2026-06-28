const els=document.querySelectorAll('.section,.cards article,.poster');
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.15});
els.forEach(el=>{el.classList.add('reveal');io.observe(el)});
