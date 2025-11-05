document.getElementById('year') && (document.getElementById('year').textContent=new Date().getFullYear());
const io=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}})},{threshold:0.14});
document.querySelectorAll('.sr').forEach(el=>io.observe(el));