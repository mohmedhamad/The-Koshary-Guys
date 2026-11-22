/* Eye blinking and scroll-reveal animations. */
// Natural random blinking
var rm=window.matchMedia("(prefers-reduced-motion: reduce)");
document.querySelectorAll(".eyes").forEach(function(eyes){var t;
  function blink(){if(rm.matches)return;t=setTimeout(function(){eyes.classList.add("is-blinking");setTimeout(function(){eyes.classList.remove("is-blinking");blink()},120)},2200+Math.random()*3000)}
  blink();
  rm.addEventListener("change",function(){clearTimeout(t);eyes.classList.remove("is-blinking");blink()});
});
// Scroll reveal (classes are removed afterwards so hover and press effects still work)
(function(){
  if(!("IntersectionObserver" in window)||rm.matches)return;
  var els=document.querySelectorAll(".wrap > h1,.guy,.tag,.wrap > .btn:not(#send),h2,.dish,.opts,.story");
  els.forEach(function(el,i){el.classList.add("reveal");el.style.transitionDelay=(i%4)*90+"ms"});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(!e.isIntersecting)return;var el=e.target;el.classList.add("visible");io.unobserve(el);
    setTimeout(function(){el.classList.remove("reveal","visible");el.style.transitionDelay=""},900)
  })},{threshold:.12,rootMargin:"0px 0px -35px 0px"});
  els.forEach(function(el){io.observe(el)});
})();

