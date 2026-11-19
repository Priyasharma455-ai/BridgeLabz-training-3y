// The HTML saves jQuery 3.7.1 as jQuery371, then loads jQuery 1.12.4.
// noConflict(true) gives the second version a separate alias.
const jq1=window.jQuery371;
jq1(function($){
  const slides=["Carousel slide 1","Carousel slide 2","Carousel slide 3"];let i=0;
  function rotate(){i=(i+1)%slides.length;$("#carouselText").text(slides[i]);}
  $("#nextSlide").on("click",rotate);setInterval(rotate,4000);
  $(".widget").on("click",function(){$(".widget").removeClass("active");$(this).addClass("active");});
  $("#versionInfo").text("Carousel and active widget jQuery version: "+$.fn.jquery);
});
const jq2=window.jQuery.noConflict(true);
jq2(function($){
  $("#openModal").on("click",function(){$("#modal").prop("hidden",false).hide().fadeIn();});
  $("#closeModal").on("click",function(){$("#modal").fadeOut(200,function(){$(this).prop("hidden",true).show();});});
  $(".tip").on("mouseenter",function(){const t=$(this).attr("title");$(this).data("saved-title",t).removeAttr("title");$("<span>").addClass("tooltip").text(t).insertAfter(this);})
    .on("mouseleave",function(){$(this).attr("title",$(this).data("saved-title"));$(this).next(".tooltip").remove();});
});