// Toggle dark mode
document.getElementById('toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Init scroll animations
AOS.init({
  duration: 1000,
  once: true
});
