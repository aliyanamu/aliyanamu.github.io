// Smooth Scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//Type Effect
var count = -1;
var rate = 30;
function typeIt(text, name, cursor) {
  $('.type').text(cursor);
  var chars = text.split('');
  setInterval(function() {
    $(name).append(chars[(++count)]);
  }, rate)
}

setInterval(function() {
  if ($('.type').attr('class').indexOf('type_blink') > -1) {
    $('.type').removeClass('type_blink');
  } else {
    $('.type').addClass('type_blink');
  }
}, 400)

typeIt('I am a developer in training since June 2018, a self-taught learner for 9 months before and work as WordPress developer for the past 6 months. I am currently learning to be a Full Stack Javascript developer in Hacktiv8. I also have degrees in Geophysical Engineering, not really related-duh! But for now I am having fun learning~ ', '.text', '_');
