// Start JQuery
$(document).ready(function(){

  //  smooth scrolling
  $('a').click(function(){
  $("html, body").animate({
    scrollTop: $( $.attr(this, "href") ).offset().top
  }, 800);
  return false;
  });


// nav toggle
$(".button").click(function(){
  $(".sideNav").toggleClass("hidden");
});

// spinning button
$('.button').on('click', function(){
  $(".navButton").toggleClass('hide');
});





});
