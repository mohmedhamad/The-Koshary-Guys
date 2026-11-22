/* Language handling, order builder, receipt and WhatsApp link. */
var LANG="";try{LANG=localStorage.getItem("kg-lang")||""}catch(e){}
if(LANG!=="de"&&LANG!=="en")LANG=((navigator.language||"").slice(0,2)==="de")?"de":"en";
function L(k){return I[LANG][k]}
function fmt(n){var t=(n%1?n.toFixed(2):String(n));if(LANG==="de")t=t.replace(".",",");return "€"+t}
var VK={Mild:"mild",Spicy:"spicy",Pickup:"pick",Delivery:"deliv"},IK={"Koshary":"kName","Rice pudding":"rName"};
var sum=document.getElementById("sum"),send=document.getElementById("send"),cname=document.getElementById("cname"),caddr=document.getElementById("caddr"),addrw=document.getElementById("addrw");
var rcHint=document.getElementById("rcHint"),rcHead=document.getElementById("rcHead"),rcList=document.getElementById("rcList"),rcMeta=document.getElementById("rcMeta"),rcTotal=document.getElementById("rcTotal"),rcTL=document.getElementById("rcTL"),rcTV=document.getElementById("rcTV"),lastTotal=0;
function up(){
  var name=cname.value.trim(),addr=caddr.value.trim(),del=o.How==="Delivery",total=0;
  addrw.hidden=!del;
  var keys=Object.keys(q).filter(function(k){return q[k]>0});
  keys.forEach(function(k){total+=q[k]*PRICE[k]});
  var why=!keys.length?L("sumEmpty"):!name?L("sumName"):(del&&!addr)?L("sumAddr"):"";
  sum.classList.toggle("empty",!keys.length);
  rcHint.textContent=why;rcHint.hidden=!why;rcHint.className="rc-hint"+(keys.length&&why?" warn":"");
  rcHead.hidden=rcMeta.hidden=rcTotal.hidden=!keys.length;
  rcList.textContent="";
  keys.forEach(function(k){var li=document.createElement("li"),a=document.createElement("span"),b=document.createElement("span");a.textContent=q[k]+" × "+L(IK[k]);b.textContent=fmt(q[k]*PRICE[k]);li.appendChild(a);li.appendChild(b);rcList.appendChild(li)});
  rcHead.textContent=L("yourOrder")+(name?" – "+name:"");
  rcMeta.textContent=(q.Koshary?L(VK[o.Spice])+" · ":"")+L(VK[o.How])+(del&&addr?" · "+addr:"");
  rcTL.textContent=L("total");rcTV.textContent=fmt(total);
  if(keys.length&&total!==lastTotal){rcTotal.classList.remove("bump");void rcTotal.offsetWidth;rcTotal.classList.add("bump")}
  lastTotal=total;
  if(why){send.setAttribute("aria-disabled","true");send.removeAttribute("href");send.tabIndex=-1;return}
  var lines=keys.map(function(k){return "- "+q[k]+" × "+L(IK[k])+" ("+fmt(q[k]*PRICE[k])+")"});
  var m=L("hi").replace("{n}",name)+"\n"+lines.join("\n")+(q.Koshary?"\n"+L("spiceL")+": "+L(VK[o.Spice]):"")+"\n"+(del?L("delivM").replace("{a}",addr):L("pickM"))+"\n"+L("total")+": "+fmt(total);
  send.setAttribute("aria-disabled","false");send.tabIndex=0;send.href="https://wa.me/"+PHONE+"?text="+encodeURIComponent(m)
}
function setLang(l){
  LANG=l;document.documentElement.lang=l;
  document.querySelectorAll("[data-i]").forEach(function(el){el.textContent=L(el.getAttribute("data-i"))});
  document.querySelectorAll("[data-ip]").forEach(function(el){el.placeholder=L(el.getAttribute("data-ip"))});
  document.querySelectorAll("[data-p]").forEach(function(el){el.textContent=fmt(PRICE[el.getAttribute("data-p")])});
  document.getElementById("lang").textContent=l==="de"?"EN":"DE";
  up();if(typeof paint==="function"&&bM)paint()
}
cname.addEventListener("input",up);caddr.addEventListener("input",up);
document.getElementById("lang").addEventListener("click",function(){var n=LANG==="de"?"en":"de";try{localStorage.setItem("kg-lang",n)}catch(e){}setLang(n)});
document.querySelectorAll(".step").forEach(function(s){s.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;var k=s.dataset.k;q[k]=Math.max(0,Math.min(30,q[k]+Number(b.dataset.d)));s.querySelector("output").textContent=q[k];up()})});
document.querySelectorAll(".chips").forEach(function(g){g.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;g.querySelectorAll("button").forEach(function(x){x.setAttribute("aria-pressed",x===b)});o[g.dataset.g]=b.dataset.v;up()})});
