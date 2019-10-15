$(function() {
  $('.flip-card').on({
    'mouseenter touchstart': function(evt) {
      evt.preventDefault();
      $(this).children('.flip-card-inner').addClass('flip-card-hover');
    },

    'mouseleave touchend': function(evt) {
      evt.preventDefault();
      $(this).children('.flip-card-inner').removeClass('flip-card-hover');
    }
  });
});
