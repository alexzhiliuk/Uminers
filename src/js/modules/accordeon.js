let options = document.querySelectorAll('.options');

options.forEach(elem => {
  elem.addEventListener('click', () => {
    if (!elem.classList.contains('active')) {
      elem.classList.add('active');
    } else {
      if (event.target === elem.children[0]) {
        elem.classList.remove('active');
      }
    }
  });
});