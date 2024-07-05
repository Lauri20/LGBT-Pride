document.addEventListener('DOMContentLoaded', () => {
  const stripes = document.querySelectorAll('.stripe');
  
  stripes.forEach((stripe, index) => {
    stripe.addEventListener('mouseover', () => {
      stripe.style.transform = 'scale(1.2)';
    });

    stripe.addEventListener('mouseout', () => {
      stripe.style.transform = 'scale(1)';
    });
  });
});