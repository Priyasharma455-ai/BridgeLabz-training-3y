$(function(){
  const usedEmails=["alreadyused@example.com"]; // Demo list for uniqueness validation.
  function error($field,selector,text){$(selector).text(text);$field.css("border",text?"2px solid red":"");}
  $("#registrationForm").on("submit",function(e){e.preventDefault();
    const $n=$("#name"),$e=$("#email"),$p=$("#password"),name=$n.val().trim(),email=$e.val().trim(),password=$p.val();
    const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ne=name?"":"Name is required.";
    const ee=!pattern.test(email)?"Enter a valid email address.":(usedEmails.includes(email.toLowerCase())?"This email is already registered.":"");
    const pe=password.length<8?"Password must contain at least 8 characters.":"";
    error($n,"#nameError",ne);error($e,"#emailError",ee);error($p,"#passwordError",pe);
    if(!ne&&!ee&&!pe){usedEmails.push(email.toLowerCase());$("#successMessage").text("Registration successful!").css("color","green");this.reset();}
    else $("#successMessage").text("");
  });
  $("#name,#email,#password").on("input",function(){$(this).css("border","");$(this).next(".error").text("");$("#successMessage").text("");});
});