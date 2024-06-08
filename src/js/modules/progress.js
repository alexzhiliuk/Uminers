const progressBar = document.querySelector('.progressBar__line_progress');
try {
  window.addEventListener('scroll', () => {
    const scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 70;
    progressBar.style.width = `${scrollPercent}%`;
  });
} catch{
  console.clear();
}
