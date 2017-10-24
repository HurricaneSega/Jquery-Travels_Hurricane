$(function () {

$(".slides").before('<div class="controls"> <a><i class="fa fa-caret-left fa-2x prev" aria-hidden="true"></i></a> <a><i class="fa fa-caret-right fa-2x next" aria-hidden="true";></i></a> </div>');


var intervalId;
var a = function () {
  $(".slides ul li:first-child").animate({
    marginLeft: -1200,
    opacity: 0.3,
  }, 800, function () {
    $(this).css({
      "margin-left": 0,
      opacity: 1
    }).appendTo(".slides ul");
  })
};


intervalId = setInterval(a, 3000);

$(".next").click(function () {
  clearInterval(intervalId);
  $(".slides ul li:first-child").animate({
    marginLeft: -1200,
    opacity: 0.3,
  }, 800, function () {
    $(this).css({
      "margin-left": 0,
      opacity: 1,
    }).appendTo(".slides ul");
  })
  intervalId = setInterval(a, 3000);
});

$(".prev").click(function () {
  clearInterval(intervalId);
  $(".slides ul li:last-child").prependTo(".slides ul").css({
    "margin-left": -1200,
    opacity: 0.3
  }).animate({
    "margin-left": 0,
    opacity: 1
  }, 800, function () {})
  intervalId = setInterval(a, 3000);

});


});
