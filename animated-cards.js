// Animated Cards Script
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.project-card');
  
  // Pause animation on hover
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.animationPlayState = 'paused';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.animationPlayState = 'running';
    });
  });
  
  // Optional: Log when animation completes a cycle
  cards[0].addEventListener('animationiteration', function() {
    console.log('Animation cycle completed');
  });
});
