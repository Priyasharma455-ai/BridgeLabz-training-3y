// The document click listener uses capture phase to close outside clicks.
const dropdown=document.querySelector("#dropdown"),toggle=document.querySelector("#toggle"),options=document.querySelector("#options");
toggle.addEventListener("click",()=>{const opening=options.hidden;options.hidden=!opening;toggle.setAttribute("aria-expanded",String(opening));});
options.addEventListener("click",e=>{const option=e.target.closest(".option");if(!option)return;toggle.textContent=option.textContent+" ▾";options.hidden=true;toggle.setAttribute("aria-expanded","false");});
document.addEventListener("click",e=>{if(!dropdown.contains(e.target)){options.hidden=true;toggle.setAttribute("aria-expanded","false");}},true);
