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
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 50) {
      $header.css('background-color', '#000618');
    } else {
      $header.css('background-color', 'transparent');
    }
  });
});
