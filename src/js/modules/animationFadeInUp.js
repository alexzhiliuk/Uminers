function addScrollAnimation() {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('animate-on-scroll');
            entry.target.classList.add('animated');
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.5, 
      }
    );
    elements.forEach((el) => {
      observer.observe(el);
    });
  }
  
  addScrollAnimation();