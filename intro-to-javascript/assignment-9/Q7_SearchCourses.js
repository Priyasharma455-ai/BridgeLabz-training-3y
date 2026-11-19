$(function(){
  const $items=$(".course");
  $("#courseSearch").on("keyup",function(){const q=$(this).val().trim().toLowerCase();let count=0;
    $items.each(function(){const text=$(this).text(),i=text.toLowerCase().indexOf(q);
      if(i>=0){count++;$(this).show().empty();if(q){$(this).append(document.createTextNode(text.slice(0,i))).append($("<span>").text(text.slice(i,i+q.length)).css({"background":"yellow","font-weight":"bold"})).append(document.createTextNode(text.slice(i+q.length)));}else{$(this).text(text);}}
      else $(this).hide();
    });$("#matchCount").text("Matching courses: "+count);
  });
  $("#clearSearch").on("click",function(){$("#courseSearch").val("").trigger("keyup");});
  $("#courseSearch").trigger("keyup");
});