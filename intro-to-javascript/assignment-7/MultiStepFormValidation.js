// Validate each step before moving forward.
const form=document.querySelector("#form"),steps=[...document.querySelectorAll(".step")],back=document.querySelector("#back"),next=document.querySelector("#next"),finish=document.querySelector("#finish"),summary=document.querySelector("#summary");let current=0;
function show(i){current=i;steps.forEach((s,n)=>s.hidden=n!==i);back.hidden=i===0;next.hidden=i===steps.length-1;finish.hidden=i!==steps.length-1;}
function valid(){const field=steps[current].querySelector("input");return field.reportValidity();}
next.addEventListener("click",()=>{if(valid())show(current+1);});back.addEventListener("click",()=>show(Math.max(0,current-1)));
form.addEventListener("submit",e=>{e.preventDefault();if(!valid())return;const safe=v=>{const s=document.createElement("span");s.textContent=v;return s.innerHTML;};summary.innerHTML=`<h2>Summary</h2><p>Name: ${safe(document.querySelector("#name").value)}</p><p>Email: ${safe(document.querySelector("#email").value)}</p><p>Password: ${"*".repeat(document.querySelector("#password").value.length)}</p><p>All steps completed!</p>`;});show(0);
