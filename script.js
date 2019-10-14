$(function() {
  // Check for smaller screen (nav is > 1 row or height of nav > 50px)
  if ($('#top_nav').height() > 50) {
    // Change nav bar display to absolute instead of fixed
    $('#top_nav').css('position', 'absolute');

    // Add class .small_screen to make 'Back to Top' link display = fixed
    $('#back_top a').addClass('small_screen');
  }

  // Event listener for screen resize
  $(window).resize(function(evt) {
    if ($('#top_nav').height() > 50) {
      // Change nav bar display to absolute + make 'Back to Top' link display = fixed
      $('#top_nav').css('position', 'absolute');
      $('#back_top a').addClass('small_screen');
    } else {
      // Change nav bar display to fixed
      $('#top_nav').css('position', 'fixed');
      $('#back_top a').removeClass('small_screen');
    }
  });


  // Event listener for mouseenter on nested nav menu
  $('.nested_list').on('mouseenter', function(evt) {
    // Only display nested menu if nav is 1 row or height of nav < 50px
    if ($('#top_nav').height() < 50) {
      $(this).children('ul').slideDown();
    }
  });


  // Event listener for mouseleave on nested nav menu
  $('.nested_list ul').on('mouseleave', function(evt) {
    $(this).slideUp();
  });

  
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
