$(document).ready(function(){

  //  smooth scrolling
  $('a').click(function(){
  $("html, body").animate({
    scrollTop: $( $.attr(this, "href") ).offset().top
  }, 800);
  return false;
  });
});

function quandoo() {
  $('#quand').removeClass("hide");
}

// reveal logo
setTimeout(function(){
  $('.fader').addClass('reveal');
},1000);
setTimeout(function(){
  $('.head').removeClass('small');
},3500);
