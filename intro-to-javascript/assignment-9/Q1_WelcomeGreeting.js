$(function(){
  const hour=new Date().getHours();
  $("#greeting").text(hour<12?"Good Morning!":hour<17?"Good Afternoon!":"Good Evening!");
  $("#changeGreeting").on("click",()=>$("#greeting").text("Believe in yourself and keep moving forward!"));
  $("#toggleWelcome").on("click",()=>$("#welcomeMessage").toggle());
  $("#greeting").on("click",()=>alert("Welcome! Have a wonderful day."));
  $("#greetingAlert").on("click",()=>$("#greeting").trigger("click"));
});