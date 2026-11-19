$(function(){
  let number=4;
  function post(title,featured){const $p=$("<article>").addClass("post");if(featured)$p.addClass("featured");$p.append($("<h2>").text(title),$("<p>").text("This post was added dynamically."));return $p;}
  $("#addPost").on("click",function(){const title=$("#postTitle").val().trim()||"New Blog Post "+number++;const $p=post(title,false);$("#posts").append($p);$p.find("h2").before($("<span>").addClass("tag").text("NEW"));$p.find("p").after($("<span>").addClass("tag").text("BLOG"));$("#postTitle").val("");});
  $("#featuredPost").on("click",function(){const $p=post("Featured: "+($("#postTitle").val().trim()||"Editor's Choice"),true);$("#posts").prepend($p);$p.find("h2").before($("<span>").addClass("tag").text("FEATURED"));});
  $("#removeLast").on("click",function(){$("#posts .post").last().remove();});
  $("#posts").on("mouseenter",".post",function(){if(/javascript|jquery|featured/i.test($(this).find("h2").text()))$(this).addClass("keyword-highlight");})
    .on("mouseleave",".post",function(){$(this).removeClass("keyword-highlight");});
});