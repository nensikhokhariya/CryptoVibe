$(document).ready(function() {
  const $header = $('#header');
  const $connectedButton = $('#connectedButton');
  const $connectWalletButton = $('#connectWalletButton');

  // Set #connectWalletButton as active by default
  $connectWalletButton.addClass('active');

  $connectedButton.on('click', function() {
    // Add 'active' class to this button and remove from the other
    $(this).addClass('active');
    $connectWalletButton.removeClass('active');
  });

  $connectWalletButton.on('click', function() {
    // Add 'active' class to this button and remove from the other
    $(this).addClass('active');
    $connectedButton.removeClass('active');
  });

  // Toggle the menu's visibility when the toggle button is clicked
  $('#toggleMenuButton').on('click', function() {
    $('#navMenu').toggleClass('show'); // Toggle the menu's visibility
  });

  // Change background color when scrolling past 50px
  
});


$(document).ready(function() {
  var $header = $('header'); // Update selector to target your header element
  
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 50) {
      $header.css({
        'background-color': 'rgba(43, 101, 150, 1)',
        'padding-top': '20px',  // Adjust top padding
        'padding-bottom': '20px'  // Adjust bottom padding
      });
    } else {
      $header.css({
        'background-color': 'transparent'
      });
    }
  });
});

$(document).ready(function(){
  $('.advantage-section .inner-advantage-block .advantage-image').matchHeight(); 
  $('.advantage-section .inner-advantage-block').matchHeight(); 
  
})




// slider


// ressponsive slider 3


$('.team-slide').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  autoplay:true,
  autoplaySpeed:2000,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	
