$(function(){
  function message(t){$("#message").hide().text(t).fadeIn();}
  function attach($b){$b.on("click.topic",function(){$(this).toggleClass("chosen");message($(this).text()+" topic selected state changed.");});}
  function refresh(){const $s=$("#removeTopic").empty().append('<option value="">Choose topic</option>');$(".topic").each(function(){$s.append($("<option>").val($(this).text()).text($(this).text()));});}
  $(".topic").each(function(){attach($(this));});refresh();
  $("#subscribe").on("click",function(){$("#status").text("Notifications are enabled.");message("Subscribed successfully.");});
  $("#unsubscribe").on("click",function(){$("#status").text("Notifications are disabled.");message("Unsubscribed.");});
  $("#addTopic").on("click",function(){const n=$("#newTopic").val().trim();if(!n){message("Enter a topic name.");return;}const $b=$("<button>").addClass("topic").text(n);$("#topics").append($b);attach($b);refresh();$("#newTopic").val("");message("Topic added.");});
  $("#removeSelected").on("click",function(){const n=$("#removeTopic").val();if(!n){message("Choose a topic.");return;}$(".topic").filter(function(){return $(this).text()===n;}).off(".topic").remove();refresh();message("Topic removed.");});
});