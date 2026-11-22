/* Synthesized button sounds and the music loop (no audio files needed). */
// ---- Sounds and music (all synthesized in the browser, no files) ----
var AC=window.AudioContext||window.webkitAudioContext,ctx,mus,sfxB,dly,bl,ll,nz,sfxOn=true,musicOn=false,tm,nx=0,st=0;
try{sfxOn=localStorage.getItem("kg-sfx")!=="off"}catch(e){}
function init(){
  if(!AC)return false;
  if(!ctx){
    ctx=new AC();
    var m=ctx.createGain();m.gain.value=.7;m.connect(ctx.destination);
    var lp=ctx.createBiquadFilter();lp.type="lowpass";lp.frequency.value=3800;lp.connect(m);
    mus=ctx.createGain();mus.gain.value=.5;mus.connect(lp);
    sfxB=ctx.createGain();sfxB.gain.value=.8;var sl=ctx.createBiquadFilter();sl.type="lowpass";sl.frequency.value=5200;sfxB.connect(sl);sl.connect(m);var sd=ctx.createDelay(.5);sd.delayTime.value=.09;var sg=ctx.createGain();sg.gain.value=.2;sl.connect(sd);sd.connect(sg);sg.connect(m);
    dly=ctx.createDelay(1);dly.delayTime.value=.45;var fb=ctx.createGain();fb.gain.value=.3;dly.connect(fb);fb.connect(dly);dly.connect(mus);
    bl=ctx.createBiquadFilter();bl.type="lowpass";bl.frequency.value=600;bl.connect(mus);
    ll=ctx.createBiquadFilter();ll.type="lowpass";ll.frequency.value=2200;ll.connect(mus);ll.connect(dly);
    nz=ctx.createBuffer(1,Math.floor(ctx.sampleRate*.2),ctx.sampleRate);var d=nz.getChannelData(0);for(var i=0;i<d.length;i++)d[i]=Math.random()*2-1;
  }
  if(ctx.state==="suspended")ctx.resume();
  return true;
}
function hz(n,b){return b*Math.pow(2,n/12)}
function tone(f,t,dur,type,vol,dest,to){var o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(to)o.frequency.exponentialRampToValueAtTime(to,t+dur);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(dest);o.start(t);o.stop(t+dur+.03)}
// Friendly kitchen sounds: soft wooden taps, warm marimba plucks, a spoon-on-bowl tink
// Soft wooden tap + warm bell notes, with a little room echo
function tick(t,f,vol){var s=ctx.createBufferSource();s.buffer=nz;var b=ctx.createBiquadFilter();b.type="bandpass";b.frequency.value=f;b.Q.value=1.2;var g=ctx.createGain();g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.001,t+.035);s.connect(b);b.connect(g);g.connect(sfxB);s.start(t);s.stop(t+.05)}
function bell(f,t,dur,vol){tone(f,t,dur,"sine",vol,sfxB);tone(f*2.005,t,dur*.6,"sine",vol*.2,sfxB);tone(f*4,t,dur*.25,"sine",vol*.15,sfxB)}
function snd(fn){if(!sfxOn||!init())return;fn(ctx.currentTime)}
function sClick(){snd(function(t){tick(t,1800,.5);tone(220,t,.08,"sine",.35,sfxB,110)})}
function sUp(){snd(function(t){tick(t,2400,.3);bell(523.25,t,.35,.22);bell(659.25,t+.06,.4,.22)})}
function sDown(){snd(function(t){tick(t,1500,.3);bell(659.25,t,.3,.2);bell(523.25,t+.06,.35,.2)})}
function sChip(){snd(function(t){tick(t,3200,.25);bell(880,t,.25,.14);bell(1318.5,t+.05,.25,.1)})}
function sSend(){snd(function(t){tick(t,2400,.3);[523.25,659.25,783.99,1046.5].forEach(function(f,i){bell(f,t+i*.09,.5,.2)});bell(2093,t+.42,.5,.07)})}
document.addEventListener("click",function(e){
  var b=e.target.closest("button,a.btn");if(!b||b.classList.contains("tg"))return;
  if(b.closest(".step")){Number(b.dataset.d)>0?sUp():sDown()}
  else if(b.classList.contains("chip"))sChip();
  else if(b.id==="send")sSend();
  else sClick();
});
// Funky old-school Egyptian loop: maqsum drum rhythm, bass, and a reedy lead in D hijaz
var TR=[
{n:"Maqsum funk",step:.3,bb:73.42,lb:293.66,lt:"sawtooth",lv:.2,k:[0,4],t:[1,3,6],s:[2,5,7],
 BASS:[[0,null,0,12,null,0,1,null],[0,null,0,12,null,7,5,null],[0,null,0,12,null,0,1,null],[8,null,7,null,5,null,4,1]],
 MEL:[[0,7,1],[1,8,1],[2,7,1],[3,5,1],[4,4,2],[6,1,1],[7,0,1],[8,0,2],[10,1,1],[11,4,1],[12,5,2],[14,4,1],[15,1,1],[16,7,1],[17,8,1],[18,12,1],[19,8,1],[20,7,2],[22,5,1],[23,4,1],[24,5,1],[25,4,1],[26,1,2],[28,4,1],[29,1,1],[30,0,2]]}
];
var cur=0,T,BASS,MEL;
function setTrack(i){cur=i;T=TR[i];BASS=T.BASS;MEL={};T.MEL.forEach(function(n){MEL[n[0]]=n})}
setTrack(0);
function hit(t,hp,vol,dur){var s=ctx.createBufferSource();s.buffer=nz;var f=ctx.createBiquadFilter();f.type="highpass";f.frequency.value=hp;var g=ctx.createGain();g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.001,t+dur);s.connect(f);f.connect(g);g.connect(mus);s.start(t);s.stop(t+dur+.02)}
function lead(f,t,dur){var o=ctx.createOscillator(),g=ctx.createGain(),v=ctx.createOscillator(),vg=ctx.createGain();o.type=T.lt;o.frequency.setValueAtTime(f*.97,t);o.frequency.linearRampToValueAtTime(f,t+.06);v.frequency.value=5.5;vg.gain.value=f*.012;v.connect(vg);vg.connect(o.frequency);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(T.lv,t+.03);g.gain.setValueAtTime(T.lv,t+dur*.7);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(ll);o.start(t);v.start(t);o.stop(t+dur+.05);v.stop(t+dur+.05)}
function play(s,t){
  var k=s%8,bn=BASS[Math.floor(s/8)][k],m=MEL[s];
  if(T.k.indexOf(k)>-1)tone(130,t,.2,"sine",.9,mus,45);
  if(T.t.indexOf(k)>-1)hit(t,2500,.5,.06);
  if(T.s.indexOf(k)>-1)hit(t,5000,.14,.04);
  if(bn!==null)tone(hz(bn,T.bb),t,.26,"square",.3,bl);
  if(m)lead(hz(m[1],T.lb),t,m[2]*T.step*.95);
}
function sched(){while(nx<ctx.currentTime+.5){play(st%32,nx);nx+=T.step;st++}}
function startM(){init();mus.gain.cancelScheduledValues(0);mus.gain.setValueAtTime(.5,ctx.currentTime);nx=ctx.currentTime+.08;st=0;clearInterval(tm);tm=setInterval(sched,100)}
function stopM(){clearInterval(tm);if(ctx){mus.gain.cancelScheduledValues(0);mus.gain.setTargetAtTime(0,ctx.currentTime,.05)}}
var bM=document.getElementById("mus"),bS=document.getElementById("sfx");
function paint(){bM.setAttribute("aria-pressed",musicOn);bM.querySelector("span").textContent=musicOn?L("musOn"):L("musOff");bS.setAttribute("aria-pressed",sfxOn);bS.textContent=sfxOn?"🔊":"🔇"}
bM.addEventListener("click",function(){if(!init())return;musicOn=!musicOn;musicOn?startM():stopM();paint()});
bS.addEventListener("click",function(){sfxOn=!sfxOn;try{localStorage.setItem("kg-sfx",sfxOn?"on":"off")}catch(e){}paint();if(sfxOn)sClick()});
document.addEventListener("visibilitychange",function(){if(!ctx||!musicOn)return;document.hidden?stopM():startM()});
