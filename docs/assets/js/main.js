(() => {
"use strict";
const root=document.documentElement;
const themeButton=document.getElementById("theme-toggle");
const menuButton=document.getElementById("menu-toggle");
const mobileNav=document.getElementById("mobile-nav");
function setTheme(theme){
 root.dataset.theme=theme;
 if(themeButton){const next=theme==="dark"?"light":"dark";themeButton.setAttribute("aria-label","Switch to "+next+" theme");themeButton.setAttribute("title","Switch to "+next+" theme");}
 try{localStorage.setItem("pk-portfolio-theme",theme);}catch(_){}
}
themeButton?.addEventListener("click",()=>setTheme(root.dataset.theme==="dark"?"light":"dark"));
function closeMenu(){if(!menuButton||!mobileNav)return;mobileNav.hidden=true;menuButton.setAttribute("aria-expanded","false");menuButton.setAttribute("aria-label","Open navigation");}
menuButton?.addEventListener("click",()=>{const opening=mobileNav.hidden;mobileNav.hidden=!opening;menuButton.setAttribute("aria-expanded",String(opening));menuButton.setAttribute("aria-label",opening?"Close navigation":"Open navigation");});
mobileNav?.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenu));
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&mobileNav&&!mobileNav.hidden){closeMenu();menuButton?.focus();}});
const year=document.getElementById("year");if(year)year.textContent=String(new Date().getFullYear());
})();
