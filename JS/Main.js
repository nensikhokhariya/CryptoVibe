// Header Buttons

const connectedButton = document.getElementById('connectedButton');
const connectWalletButton = document.getElementById('connectWalletButton');

// Set #connectWalletButton as active by default
connectWalletButton.classList.add('active');

connectedButton.addEventListener('click', function() {
  // Add 'active' class to this button and remove from the other
  this.classList.add('active');
  connectWalletButton.classList.remove('active');
});

connectWalletButton.addEventListener('click', function() {
  // Add 'active' class to this button and remove from the other
  this.classList.add('active');
  connectedButton.classList.remove('active');
});
