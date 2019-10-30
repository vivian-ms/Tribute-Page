$(function() {
  // Collapse navbar when clicking nav-items or main document
  $('.navbar .nav-item:not(.dropdown), .dropdown-item, #main').on('click', function(evt) {
    $('.navbar-collapse').collapse('hide');
  });

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
