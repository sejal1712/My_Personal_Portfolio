document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');

  const appearOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  projects.forEach(project => {
    appearOnScroll.observe(project);
  });
});