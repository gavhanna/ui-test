$(".icon").on("click", function(){
  var $this = $(this);
  if ($this.hasClass("active")){
    $this.removeClass("active");
  } else {
    $this.addClass("active").siblings().removeClass("active");  
  }
});

$(".user").click(function(){
  modalPopup("user");
});

$(".home").click(function(){
  modalPopup("home");
});

$(".search").click(function(){
  modalPopup("search");
});


var modalPopup = function(modal){
  var $m = $("." + modal + "-modal");
  console.log($m);
  if ($m.hasClass("active-modal")){
    $m.removeClass("active-modal");
  } else {
    $m.addClass("active-modal").siblings().removeClass("active-modal");
  }
};