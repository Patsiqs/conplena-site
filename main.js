const button=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(button&&nav){
  button.addEventListener('click',()=>{
    nav.classList.toggle('open');
    button.setAttribute('aria-expanded',nav.classList.contains('open'));
  });
}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('a[href*="wa.me"]').forEach(a=>a.addEventListener('click',()=>{
  if(typeof gtag==='function'){
    gtag('event','clique_whatsapp',{botao:a.textContent.trim(),pagina:location.pathname});
  }
}));
