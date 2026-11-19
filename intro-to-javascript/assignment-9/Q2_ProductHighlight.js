$(function(){
  $(".product").on("click",function(e){if($(e.target).closest(".favorite").length)return;$(this).toggleClass("highlight");if($(this).attr("data-stock")==="out")alert("This product is out of stock.");});
  $(".product").hover(function(){$(this).find(".details").stop(true,true).slideDown(150);},function(){$(this).find(".details").stop(true,true).slideUp(150);});
  $(".favorite").on("click",function(e){e.stopPropagation();$(this).toggleClass("selected").text($(this).hasClass("selected")?"♥ Favorited":"♡ Favorite");});
});