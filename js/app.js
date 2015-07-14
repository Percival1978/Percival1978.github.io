// Start JQuery
$(document).ready(function(){

  //  smooth scrolling
  $('a').click(function(){
  $("html, body").animate({
    scrollTop: $( $.attr(this, "href") ).offset().top
  }, 800);
  return false;
  });

  //slider
  // $('a').click(function() {
  //   $( $.attr(this, "href") ).toggleClass("hide").toggleClass("contact");
  //   // Animation complete.
  // });

// mobile nav toggle
$(".mobileButton").click(function(){
  $(".smallNav").toggleClass("hide");
  // $(".smallNav a").slideToggle("slow");
});

// spinning button
$('.mobileButton').on('click', function(){
  $(this).addClass('active').delay(1000).queue(function(next){
    $(this).removeClass('active');

    next();
  });
});



});
