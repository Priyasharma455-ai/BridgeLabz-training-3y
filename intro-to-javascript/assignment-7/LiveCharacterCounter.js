// Display remaining characters and stop input at 100 characters.
const box=document.querySelector("#message"),counter=document.querySelector("#counter");
function update(){const left=100-box.value.length;counter.textContent=`${left} characters remaining`;counter.className=left===0?"limit":left<=20?"warning":"";}
box.addEventListener("input",update);box.addEventListener("beforeinput",e=>{if(e.inputType.startsWith("insert")&&box.value.length>=100)e.preventDefault();});
document.querySelector("#reset").addEventListener("click",()=>{box.value="";update();});update();
