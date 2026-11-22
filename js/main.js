/* Start-up: applies language, sound state and walker speed. */
paint();setLang(LANG);
(function(){var ln=document.getElementById("lane");if(!ln)return;function sz(){var w=document.documentElement.clientWidth||window.innerWidth||800;ln.style.setProperty("--dur",((w+120)/48).toFixed(1)+"s")}sz();window.addEventListener("resize",sz)})();
