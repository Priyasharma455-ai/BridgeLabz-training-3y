// Filter student rows without case sensitivity.
const search=document.querySelector("#search"),rows=[...document.querySelectorAll("#rows tr")],none=document.querySelector("#none");
search.addEventListener("input",()=>{const q=search.value.trim().toLowerCase();let count=0;rows.forEach(row=>{const match=row.textContent.toLowerCase().includes(q);row.hidden=!match;if(match)count++;});none.hidden=count!==0;});
