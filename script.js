$(function() {  
  // Event listeners for li elements of timeline list
  $('.timeline_list').on({
    // On mouseenter / touchstart, hide timeline date and show details
    'mouseenter touchstart': function(evt) {
      evt.preventDefault();
      $(this).children('.date').addClass('hide').removeClass('show');
      $(this).children('.details').addClass('show').removeClass('hide');

    },

    // On mouseleave / touchend, show timeline date and hide details
    'mouseleave touchend': function(evt) {
      evt.preventDefault();
      $(this).children('.date').addClass('show').removeClass('hide');
      $(this).children('.details').addClass('hide').removeClass('show');
    }
  }, 'li');
});
