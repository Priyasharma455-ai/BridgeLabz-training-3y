// Show clicked image in a modal; clicks inside do not close it.
const gallery=document.querySelector("#gallery"),modal=document.querySelector("#modal"),content=document.querySelector("#content"),large=document.querySelector("#large");
gallery.addEventListener("click",e=>{const img=e.target.closest("img");if(!img)return;large.src=img.dataset.large;large.alt=img.alt;modal.hidden=false;});
function close(){modal.hidden=true;large.removeAttribute("src");}
modal.addEventListener("click",close);content.addEventListener("click",e=>e.stopPropagation());document.querySelector("#close").addEventListener("click",close);document.addEventListener("keydown",e=>{if(e.key==="Escape")close();});
