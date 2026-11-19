$(function(){
  $(".contact").hide();
  $(".manager-button").on("click",function(){$(this).siblings(".employee").toggleClass("highlight");});
  $(".employee").hover(function(){$(this).children("span").first().next(".contact").show();},function(){$(this).children("span").first().next(".contact").hide();});
  $(".department-title").on("click",function(){$(this).parent().children(".team").find(".employee").toggleClass("department-highlight");});
  $("#randomEmployee").on("click",function(){const $all=$(".employee"),$pick=$all.eq(Math.floor(Math.random()*$all.length));$all.removeClass("sibling-highlight");$pick.siblings(".employee").addBack().addClass("sibling-highlight");});
  $("#collapseTeams").on("click",function(){$(this).parent().find(".team").slideToggle();});
});