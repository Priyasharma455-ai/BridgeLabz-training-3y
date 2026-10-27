// Show client coordinates and place a red dot on double-click.
const box=document.querySelector("#box"),coords=document.querySelector("#coords");
box.addEventListener("mousemove",e=>{coords.textContent=`clientX: ${e.clientX}, clientY: ${e.clientY}`;});
box.addEventListener("dblclick",e=>{const rect=box.getBoundingClientRect(),dot=document.createElement("span");dot.className="dot";dot.style.left=`${e.clientX-rect.left}px`;dot.style.top=`${e.clientY-rect.top}px`;box.append(dot);});
