$(function(){
  $(".answer").hide();
  $(".question").on("click",function(){$(this).next(".answer").slideToggle();});
  $(".question").hover(function(){$(this).css("color","blue");},function(){$(this).css("color","");});
  $(".question").on("dblclick",function(){$(".answer").slideUp();});
  $(".answer input").on("focus",function(){$(this).closest(".faq-item").find(".question").css("background","#fff2b3");})
    .on("blur",function(){$(this).closest(".faq-item").find(".question").css("background","");});
});