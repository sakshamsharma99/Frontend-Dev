const btn=document.getElementById("dropdownBtn");
const menu=document.getElementById("dropdownMenu");
btn.addEventListener("click",()=>menu.style.display=menu.style.display==="block"?"none":"block");
menu.addEventListener("click",(e)=>{if(e.target.classList.contains("item")){btn.textContent=e.target.textContent;menu.style.display="none";}});
document.addEventListener("click",(e)=>{if(!e.target.closest(".dropdown"))menu.style.display="none";},true);
