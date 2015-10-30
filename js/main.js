$(document).ready(function(){

  //  smooth scrolling
  $('a').click(function(){
  $("html, body").animate({
    scrollTop: $( $.attr(this, "href") ).offset().top
  }, 800);
  return false;
  });
});


// reveal logo
setTimeout(function(){
  $('.fader').addClass('reveal');
},1000);
