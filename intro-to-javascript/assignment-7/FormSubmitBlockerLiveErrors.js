// Prevent invalid submission, show inline errors and clear them as fields are corrected.
const form=document.querySelector("#form"),success=document.querySelector("#success");
const fields=[
 {input:document.querySelector("#name"),error:document.querySelector("#name-error"),check(){return this.input.value.trim()?"":"Name is required.";}},
 {input:document.querySelector("#email"),error:document.querySelector("#email-error"),check(){return !this.input.value.trim()?"Email is required.":!this.input.value.includes("@")?"Email must contain @.":"";}},
 {input:document.querySelector("#password"),error:document.querySelector("#password-error"),check(){return this.input.value.length<6?"Password must be at least 6 characters.":"";}}
];
function validate(field){const message=field.check();field.error.textContent=message;field.input.setAttribute("aria-invalid",String(Boolean(message)));return !message;}
fields.forEach(field=>field.input.addEventListener("input",()=>{validate(field);success.textContent="";}));
form.addEventListener("submit",e=>{e.preventDefault();if(!fields.map(validate).every(Boolean)){success.textContent="";return;}success.textContent="Form Submitted Successfully";form.reset();fields.forEach(field=>{field.error.textContent="";field.input.removeAttribute("aria-invalid");});});
