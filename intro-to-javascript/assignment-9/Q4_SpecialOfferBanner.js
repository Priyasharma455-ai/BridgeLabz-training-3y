$(function(){
  const $b=$(".banner");
  $("#hideBanner").on("click",()=>$b.first().hide()); $("#showBanners").on("click",()=>$b.show());
  $("#slideUp").on("click",()=>$b.slideUp()); $("#slideDown").on("click",()=>$b.slideDown());
  $("#fadeOut").on("click",()=>$b.fadeOut()); $("#fadeIn").on("click",()=>$b.fadeIn());
  let current=0; $b.hide().eq(current).show();
  setInterval(function(){$b.eq(current).fadeOut(400,function(){current=(current+1)%$b.length;$b.eq(current).fadeIn(400);});},5000);
});