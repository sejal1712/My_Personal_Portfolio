var typed = new Typed('#element', {
  strings: ['Web Developer', 'Frontend Software Developer'],
  typeSpeed: 70,
});


document.addEventListener('DOMContentLoaded', function() {
document.getElementById('download-resume').addEventListener('click', function(){
  const resumePath = 'Home/Sejal_Kushwaha_Resume.pdf';

  const link = document.createElement('a');
  link.href = resumePath;

  link.download = 'Sejal_Kushwaha_Resume.pdf';

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
});

document.getElementById('visit-github').addEventListener('click', function(){
  window.open('https://github.com/sejal1712', '_blank');
});
});

document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');

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

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

