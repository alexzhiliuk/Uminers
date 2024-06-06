const points = document.querySelectorAll('.point');

const progressBar = document.querySelector('.progressBar__line_progress');

const maxValue = 350;

window.addEventListener('scroll', () => {
  // Вычисляем процент прокрутки страницы
  const scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 70;

  progressBar.style.width = `${scrollPercent}%`;

  points.forEach((point, index) => {
    const pointValue = parseInt(point.querySelector('.point__heading').textContent);
    const pointPercent = (pointValue / maxValue) * 100;

    if (scrollPercent >= pointPercent) {
      point.classList.add('active');
    } else {
      point.classList.remove('active');
    }
  });
});